export function maxSubarraySum(input: Array<number>, num: number): number | null {
    if (input.length < num) return null;
  
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
      maxSum += input[i];
    }
    tempSum = maxSum;
    for (let i = num; i < input.length; i++) {
      tempSum = tempSum - input[i - num] + input[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  