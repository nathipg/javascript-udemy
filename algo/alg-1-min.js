// BEST CASE: [5] => O(1)
// WORST CASE: [3, 1] => O(n)
function getMin(numbers) { // [3, 1, 2]
  if (!numbers.length) { // 1 execution
    throw new Error('Empty array');
  }

  let currentMin = numbers[0]; // 1 execution

  for (let i = 1; i < numbers.length; i++) { // 1 execution
    if (currentMin > numbers[i]) { // 2 executions
      currentMin = numbers[i]; // 1 execution
    }
  }

  return currentMin; // 1 execution
}

// T = n => Linear Time Complexity => O(n)

// BEST CASE: [1, 2, 3] => O(n^2)
// WORST CASE: [3, 2, 1] => O(n^2)
// AVERAGE CASE: [?, ?, ?] => O(n^2)
function getMin2(numbers) {
  if (!numbers.length) {
    throw new Error('Empty array');
  }

  for (let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i]; // n times
    for (let j = i + 1; j < numbers.length; j++) {
      let innerElement = numbers[j]; // n * n times

      if (outerElement > innerElement) {
        numbers[i] = innerElement;
        numbers[j] = outerElement;

        outerElement = numbers[i];
        innerElement = numbers[j];
      }
    }
  }

  return numbers[0];
}

// Quadratic Time Complexity => n * n => O(n^2)

const testNumbers = [2, 1, -5, 10, 10, -10];

const min = getMin(testNumbers);
const min2 = getMin2(testNumbers);

console.log(min);
console.log(min2);
