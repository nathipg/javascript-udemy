/* const button = document.querySelector('button');

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
}, 2000); */

const buttons = document.querySelectorAll('button');

const buttonClickHandler = event => {
  console.log(event);
};

buttons.forEach(btn => btn.addEventListener('mouseenter', buttonClickHandler));

window.addEventListener('scroll', event => {
  console.log(event);
});