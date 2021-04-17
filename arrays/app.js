/* const numbers = [1, 2, 3];
console.log(numbers); */

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

/* const hobbies = ['Cooking', 'Sports'];
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

// hobbies[5] = 'Another hobbie'; // Rarely used
// console.log([...hobbies]);

hobbies.splice(1, 0, 'Good Food', 'Nice Food'); // Add element in certain position
console.log([...hobbies]);

const removedElements = hobbies.splice(2, 1); // Remove elements in certain positions
console.log([...hobbies]);

const removedElements2 = hobbies.splice(-1, 1); // Remove last element in array
console.log([...hobbies]); */

/* const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.slice();

testResults.push(99);

console.log([...testResults]);
console.log([...storedResults]);

const someTestResults = testResults.slice(1, 3);
console.log([...someTestResults]);

const someMoreTestResults = testResults.slice(3);
console.log([...someMoreTestResults]); */

const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log([...testResults]);
console.log([...storedResults]);

console.log(testResults.indexOf(1.5));
console.log(testResults.lastIndexOf(1.5));

const personData = [{ name: 'Pissuti' }, { name: 'Apollo' }];

const pissuti = personData.find(
  (person, index, persons) => person.name === 'Pissuti'
);
console.log({ ...pissuti });

pissuti.name += ' (Edited)';

console.log({ ...pissuti }, { ...personData });

const apolloIndex = personData.findIndex(
  (person, index, persons) => person.name === 'Apollo'
);

console.log(apolloIndex);