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