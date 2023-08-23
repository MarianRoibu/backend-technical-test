export function averagePair(input: Array<number>, target: number): boolean {
    let left = 0;
    let right = input.length - 1;
  
    while (left <= right) {
      const sum = input[left] + input[right];
      const average = sum / 2;
  
      if (average === target) {
        return true;
      } else if (average < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return false;
  }