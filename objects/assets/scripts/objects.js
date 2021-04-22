const person = {
  name: 'Pissuti',
  age: 23,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {
    console.log('Hi there!');
  }
};

person.greet();

console.log({...person});

person.age = 24; // Modify
console.log({...person});

person.isAdmin = true; // Add
console.log({...person});

delete person.age; // Remove
console.log({...person});