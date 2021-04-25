const button = document.querySelector('button');

const buttonClickHandler = () => {
  console.log('Clicked');
};

const anotherButtonClickHandler = () => {
  console.log('It was clicked');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler; // Replace buttonClickHandler

const boundFn = buttonClickHandler.bind(this);

button.addEventListener('click', boundFn);
button.addEventListener('click', anotherButtonClickHandler);

setTimeout(() => {
  button.removeEventListener('click', boundFn);
}, 2000);