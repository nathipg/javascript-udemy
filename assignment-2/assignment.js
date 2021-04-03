const task3Element = document.getElementById('task-3');

// 1

function showText() {
  alert('Text');
}

function showName(name) {
  alert(name);
}

// 2

showText();
showName('Pissuti');

// 3

task3Element.addEventListener('click', showText);

// 4

function combineText(string1, string2, string3) {
  return `${string1} ${string2} ${string3}`;
}

// 5

alert(combineText('a', 'b', 'c'));