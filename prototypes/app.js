// class Person {
//   name = 'Pissuti';

//   constructor() {
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

const person = new Person();
person.greet();
