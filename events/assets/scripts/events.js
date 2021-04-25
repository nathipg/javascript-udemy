const button = document.querySelector('button');

const buttonClickHandler = () => {
  console.log('Clicked');
};

const anotherButtonClickHandler = () => {
  console.log('It was clicked');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler; // Replace buttonClickHandler

button.addEventListener('click', buttonClickHandler);
button.addEventListener('click', anotherButtonClickHandler);
