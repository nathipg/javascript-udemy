const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';


const person = {
  'first name': 'Pissuti',
  age: 23,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {
    console.log('Hi there!');
  },
  1.5: 'Hello'
};

person.greet();

console.log({...person});

person.age = 24; // Modify
console.log({...person});

person.isAdmin = true; // Add
console.log({...person});

delete person.age; // Remove
console.log({...person});

console.log(person['first name']);

console.log(person[1.5]);
console.log(person['1.5']);