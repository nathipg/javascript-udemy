const defaultResult = 0;
let currentResult = defaultResult;

function add(n1, n2) {
  return n1 + n2;
}

alert(add(1, 1));

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
