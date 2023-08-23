export function highestOccurrence(input: Array<string | number>): Array<string | number> {
    const frequencyMap = new Map<string | number, number>();
    let maxFrequency = 0;
    for (const item of input) {
      const frequency = (frequencyMap.get(item) || 0) + 1;
      frequencyMap.set(item, frequency);
      maxFrequency = Math.max(maxFrequency, frequency);
    }
    const result: Array<string | number> = [];
    for (const [item, frequency] of frequencyMap.entries()) {
      if (frequency === maxFrequency) {
        result.push(item);
      }
    }
    return result;
  }
  