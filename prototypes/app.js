// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = 'Pissuti';

//   constructor() {
//     super();
//     this.age = 23;
//   }

//   greet() {
//     console.log(`Name: ${this.name} Age: ${this.age}`);
//   }
// }

function Person() {
  this.age = 23;
  this.name = 'Pissuti';
  this.greet = function () {
    console.log(`Name: ${this.name} Age: ${this.age}`);
  };
}

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };

Person.describe = function() { // Same as define static method
  console.log('Creating persons...');
}

Person.prototype.printAge = function () { // Same as extends class with this method
  console.log(this.age);
};

console.log(Person);
Person.describe();

const person = new Person();
person.greet();
person.printAge();

console.log(person);
console.dir(Object.prototype);