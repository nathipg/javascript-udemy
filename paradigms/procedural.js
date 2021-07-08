const form = document.getElementById('user-input');

function signUpHandler(event) {
  event.preventDefault();

  const userNameInput = document.getElementById('username');
  const enteredUsername = userNameInput.value;
  const passwordInput = document.getElementById('password');
  const enteredPassword = passwordInput.value;

  if(enteredUsername.trim().length === 0) {
    alert('Invalid username - must not be empty!');
    return;
  }

  if(enteredPassword.trim().length <= 5) {
    alert('Invalid password - must be six characters or longer!');
    return;
  }

  const user = {
    userName: enteredUsername,
    password: enteredPassword,
  };

  console.log(user);
}

form.addEventListener('submit', signUpHandler);