const mainBox = document.getElementById('main-box');

console.log(mainBox.getBoundingClientRect());

console.log(
  mainBox.clientTop,
  mainBox.clientLeft,
  mainBox.clientWidth,
  mainBox.clientHeight
);

console.log(
  mainBox.clientTop,
  mainBox.clientLeft,
  mainBox.clientWidth,
  mainBox.clientHeight
);

console.log(mainBox.scrollHeight, mainBox.scrollTop);

console.log(window.innerWidth, window.innerHeight); // includes scrollbar

console.log(
  document.documentElement.clientHeight,
  document.documentElement.clientWidth
); // doesn't include scrollbar
