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

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if(!enteredNumber) {
    throw Error('Zero is not allowed');
  }

  if(calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if(calculationType === 'SUBSTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if(calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if(calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  } else {
    throw Error('Invalid operation')
  }

  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
}

function add() {
  calculateResult('ADD');
}

function substract() {
  calculateResult('SUBSTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
