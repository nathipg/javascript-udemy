const h1 = document.getElementById('main-title');

h1.textContent = 'Some title';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Change) ';

const body = document.body;

const listItemElements = document.querySelectorAll('li');
//const listItemElements = document.getElementsByTagName('li');

for(const li of listItemElements) {
  console.dir(li);
}

const ul = document.querySelector('ul');
const secondLi = ul.children[1];
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;
// ul.childNodes
// ul.firstChild
// ul.lastChild

document.documentElement.parentElement // null
document.documentElement.parentNode // document

const bodyElement = firstLi.closest('body');