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

  if (!enteredNumber) {
    throw Error('Zero is not allowed');
  }

  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBSTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  } else {
    throw Error('Invalid operation');
  }

  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
}

addBtn.addEventListener('click', calculateResult.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculateResult.bind(this, 'SUBSTRACT'));
multiplyBtn.addEventListener('click', calculateResult.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculateResult.bind(this, 'DIVIDE'));
