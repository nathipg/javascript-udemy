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

Person.prototype.printAge = function () {
  console.log(this.age);
};

const person = new Person();
person.greet();
person.printAge();

console.log(person);
