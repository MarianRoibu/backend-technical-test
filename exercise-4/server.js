const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const os = require("os");
const crypto = require("crypto");
const { Worker } = require('worker_threads');

const app = express();
app.use(bodyParser.json());

const generateAndSum = async (count) => {
  const array = generateRandomArray(count);
  const batches = os.cpus().length;
  const promises = [];
  for (let i = 0; i < batches; i++) {
    promises.push(createWorker(array.slice(i * count / batches, (i + 1) * count / batches)));
  }
  const results = await Promise.all(promises);
  let sum = 0;
  for (const result of results) {
    sum += result;
  }
  return sum;
};

const generateRandomArray = (length) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 1000));
};

const createWorker = (batch) => {
  return new Promise((resolve, reject) => {
    const thread = new Worker("./worker.js");
    thread.on("message", (sum) => {
      resolve(sum);
    });
    thread.on("error", (err) => {
      reject(err);
    });
    thread.postMessage(batch);
  });
};

app.get("/generate-and-sum", async (req, res) => {
  const count = req.query.count;
  const sum = await generateAndSum(count);
  res.send({ sum });
});

const port = 3000;
const server = http.createServer(app);
server.listen(port);

console.log("Server running on port " + port);
