const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return +userInput.value;
}

// Generates and write calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  outputResult(currentResult, `${resultBeforeCalc} ${operator} ${calcNumber}`); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
  createAndWriteOutput('+', initialResult, enteredNumber);
}

function substract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  writeToLog('SUBSTRACT', initialResult, enteredNumber, currentResult);
  createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
  createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
