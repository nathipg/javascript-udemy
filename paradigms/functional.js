const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }

  if (flag === MIN_LENGTH) {
    return value.trim().length >= validatorValue;
  }
}

function getUserInput(inputElementId) {
  return document.getElementById(inputElementId).value;
}

function createUser(name, password) {
  if (!validate(name, REQUIRED) || !validate(password, MIN_LENGTH, 5)) {
    throw new Error(
      'Invalid input - username or password is wrong (password must be six characters or longer)'
    );
  }

  return {
    name,
    password
  };
}

function printUser(user) {
  console.log(user);
}

function signUpHandler(event) {
  event.preventDefault();

  const enteredUsername = getUserInput('username');
  const enteredPassword = getUserInput('password');

  try {
    const newUser = createUser(enteredUsername, enteredPassword);
    printUser(newUser);
  } catch(err) {
    alert(err.message);
  }
}

function connectForm(formId, formSubmitHandler) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', formSubmitHandler);
}

connectForm('user-input', signUpHandler);
