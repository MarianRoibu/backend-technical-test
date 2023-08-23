const { maxSubarraySum } = require('../exercise-2/exercise-2');

describe('maxSubarraySum', () => {
  it('should return the maximum sum of n consecutive elements', () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
    expect(maxSubarraySum([4, 2, 1, 6], 1)).toBe(6);
    expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toBe(13);
  });

  it('should return null if the array length is less than n', () => {
    expect(maxSubarraySum([], 4)).toBeNull();
    expect(maxSubarraySum([1, 2], 4)).toBeNull();
  });
});
