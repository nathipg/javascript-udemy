function isEvenOrOdd(number) {
  // const result = number % 2;
  // if(result === 0) {
  //   return 'even';
  // } else {
  //   return 'odd';
  // }
  return number % 2 ? 'odd' : 'even';
}

// Constant Time Complexity => O(1)

console.log(10, isEvenOrOdd(10));
console.log(11, isEvenOrOdd(11));
