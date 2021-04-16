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

const list = document.querySelector('ul');
const div = document.querySelector('div');

div.insertAdjacentHTML('beforeend', '<p>Some text</p>');