const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// 1
if (randomNumber > 0.7) {
  alert('Greater than 0.7');
}

// 2
const myArray = [1, 2, 3, 4, 5];

for (e of myArray) {
  console.log(e);
}

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// 3
for (let i = myArray.length - 1; i >= 0; i--) {
  console.log(myArray[i]);
}

// 4
const anotherRandomNumber = Math.random();

if (
  (randomNumber > 0.7 && anotherRandomNumber > 0.7) ||
  randomNumber <= 0.2 ||
  anotherRandomNumber <= 0.2
) {
  alert('OK');
}
