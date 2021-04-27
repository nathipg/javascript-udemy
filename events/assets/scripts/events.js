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

/* const buttons = document.querySelectorAll('button');

const buttonClickHandler = event => {
  console.log(event);
};

buttons.forEach(btn => btn.addEventListener('mouseenter', buttonClickHandler));

window.addEventListener('scroll', event => {
  console.log(event);
}); */

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');
const button = document.querySelector('button');

div.addEventListener('click', function(event) {
  console.log('DIV', event);
  console.log(this); // "this" is the current target
});

button.addEventListener('click', event => {
  event.stopPropagation();
  //event.stopImmediatePropagation();
  console.log('BUTTON', event);
  console.log(this); // "this" is the window, because this is a arrow function
});

/*
  Event Progation:

  - Capturing Phase: It runs from parents to chidren
    Ex: A div with a button inside, both have a click event. If user clicks the button, div event runs first and then, the button event
  - Bubbling Phase: It runs from children to parents
    Ex: A div with a button inside, both have a click event. If user clicks the button, button event runs first and then, the div event

  Bubbling is the default.
*/

// Bad approach
// const listItems = document.querySelectorAll('li');

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   });
// });

// Better approach (With delegation)
const list = document.querySelector('ul');

list.addEventListener('click', function(event) {
  event.target.closest('li').classList.toggle('highlight');
  // form.submit();
  button.click();
  console.log(this); // "this" is the current target
});
