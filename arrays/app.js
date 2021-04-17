const numbers = [1, 2, 3];
console.log(numbers);

/* const moreNumbers = new Array(1, 2, 3); // Also works without new keyword
const moreNumbers2 = new Array(5); // Create empty array with length 5
console.log(moreNumbers);
console.log(moreNumbers2);

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers); */

/* const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const textAsArray = Array.from('Hi!');
console.log(textAsArray);

const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', {modeDetail: []}];
const analyticsData = [[1, 1.6], [-5.4, 2.1]];

for(const data of analyticsData) {
  for(const dataPoint of data) {
    console.log(data);
  }
}

console.log(personalData[1]); */

const hobbies = ['Cooking', 'Sports'];
hobbies.push('Reading');
hobbies.unshift('Coding');
console.log([...hobbies]);

const poppedValue = hobbies.pop();
console.log([...hobbies]);
console.log(poppedValue);

const shiftedValue = hobbies.shift();
console.log([...hobbies]);
console.log(shiftedValue);

hobbies[1] = 'Sports Edited';
console.log([...hobbies]);

hobbies[5] = 'Another hobbie'; // Rarely used
console.log([...hobbies]);