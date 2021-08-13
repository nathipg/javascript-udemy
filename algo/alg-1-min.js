function getMin(numbers) {
  if (!numbers.length) {
    throw new Error('Empty array');
  }

  let currentMin = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (currentMin > numbers[i]) {
      currentMin = numbers[i];
    }
  }

  return currentMin;
}

const testNumbers = [3, 1, 2];

const min = getMin(testNumbers);

console.log(min);
