const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = defaultResult;

function add() {
  currentResult = currentResult + +userInput.value;
  calculationDescription += ' + ' + +userInput.value;
  outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener('click', add);