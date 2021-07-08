class Validator {
  static REQUIRED = 'REQUIRED';
  static MIN_LENGTH = 'MIN_LENGTH';

  static validate(value, flag, validatorValue) {
    if(flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    
    if(flag === this.MIN_LENGTH) {
      return value.trim().length >= validatorValue;
    }
  }
}

class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }

  print() {
    console.log(this);
  }
}

class UserInputForm {
  constructor() {
    this.form = document.getElementById('user-input');
    this.userNameInput = document.getElementById('username');
    this.passwordInput = document.getElementById('password');

    this.form.addEventListener('submit', this.signUpHandler.bind(this));
  }

  signUpHandler(event) {
    event.preventDefault();

    const enteredUsername = this.userNameInput.value;
    const enteredPassword = this.passwordInput.value;

    if(
        !Validator.validate(enteredUsername, Validator.REQUIRED)
    || !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 6)) {
      alert('Invalid input - username or password is wrong (password must be six characters or longer)');
      return;
    }

    const user = new User(enteredUsername, enteredPassword);
    user.print();
  }
}

new UserInputForm();