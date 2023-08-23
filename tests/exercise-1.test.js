const { highestOccurrence } = require('../exercise-1/exercise-1');

describe('highestOccurrence', () => {
  it('should return the item(s) with the highest frequency', () => {
    expect(highestOccurrence([2, 3, 2, 2, 2, 4, 2])).toEqual([2]);
    expect(highestOccurrence([2, 3, 2, 3, 2, 3, 4])).toEqual([2, 3]);
    expect(highestOccurrence(['a', 'b', 'c', 'a', 'a', 'a', 'a'])).toEqual(['a']);
    expect(highestOccurrence(['a', 'a', 2, 2, 2, 'a', 4])).toEqual(['a', 2]);
  });
});
