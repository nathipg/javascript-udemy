// 1
const numbers = [1, 2, 3, 4, 5, 20, 6, 7, 8, 9, 10];

const greaterThanFive = numbers.filter(num => num > 5);
const objs = numbers.map(num => ({ num }));
const multiplication = numbers.reduce(
  (prevValue, curValue) => prevValue * curValue,
  1
);

console.log(greaterThanFive);
console.log(objs);
console.log(multiplication);

// 2
const findMax = (...values) => {
  values.sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a === b) {
      return 0;
    } else {
      return -1;
    }
  });

  return values[0];
};

const maxNumber = findMax(...numbers);
console.log(maxNumber);

// 3
const findMinMax = (...values) => {
  values.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a === b) {
      return 0;
    } else {
      return -1;
    }
  });

  return [values[0], values.pop()];
};

const [minimumNumber, maximumNumber] = findMinMax(...numbers);
console.log(minimumNumber, maximumNumber);

// 4
const ids = new Set();

ids.add(1);
ids.add(2);
ids.add(1);

console.log(ids);
