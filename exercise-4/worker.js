const { parentPort } = require('worker_threads');

parentPort.on('message', (batch) => {
  const sum = batch.reduce((acc, val) => acc + val, 0);
  parentPort.postMessage(sum);
});
