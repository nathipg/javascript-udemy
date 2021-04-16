const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'lightblue';
// section.className = '';

button.addEventListener('click', () => {
  // if(section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');
  section.classList.toggle('invisible');
});

// section.innerHTML = '<h2>Test</h2>';

const div = document.querySelector('div');
div.insertAdjacentHTML('beforeend', '<p>Some text</p>');

const list = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.textContent = 'Item 4';
list.appendChild(newLi);

list.append('Some text');

const anotherLi = document.createElement('li');
anotherLi.textContent = 'Another li'

// list.prepend(anotherLi);

list.lastElementChild.before(anotherLi.cloneNode(true));
list.lastElementChild.after(anotherLi.cloneNode(true));
list.lastElementChild.insertAdjacentElement(anotherLi.cloneNode(true));
list.lastElementChild.replaceWith(anotherLi.cloneNode(true));