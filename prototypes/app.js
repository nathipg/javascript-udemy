class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'Pissuti';

  constructor() {
    super();
    this.age = 23;
  }

  // greet() {
  //   console.log(`Name: ${this.name} Age: ${this.age}`);
  // }

  greet = () => {
    console.log(`Name: ${this.name} Age: ${this.age}`);
  };
}

// function Person() {
//   this.age = 23;
//   this.name = 'Pissuti';
// }

// Person.prototype.greet = function() {
//   console.log(`Name: ${this.name} Age: ${this.age}`);
// };

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };

// Person.describe = function() { // Same as define static method
//   console.log('Creating persons...');
// }

// Person.prototype.printAge = function () { // Same as extends class with this method
//   console.log(this.age);
// };

// console.log(Person);
// Person.describe();

// const person = new Person();
// person.greet();
// person.printAge();

// console.log(person);
// console.dir(Object.prototype);

// const p = new Person();
// const p2 = new Person();
// console.log(p);
// console.log(p.__proto__ === p2.__proto__);

// const btn = document.getElementById('btn');
// btn.addEventListener('click', p.greet);

const course = {
  title: 'Javascript',
  rating: 5
};

Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function() {
    console.log(`${this.rating}/5`);
  }
});
console.log(Object.getPrototypeOf(course));

course.printRating();

const student = Object.create({
  printProgress: function() {
    console.log(this.progress);
  }
}, {
  name: {
    configurable: true,
    enumerable: true,
    value: 'Pissuti',
    writable: true
  }
});

// student.name = 'Pissuti';

Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false
});

console.log(student);