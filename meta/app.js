// Library land
const uid = Symbol('uid');

console.log(uid);

const user = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'Pissuti',
  age: '24',
  [Symbol.toStringTag]: 'User',
};

// App land -> Using the library
user.id = 'p2'; // This should not be possible

console.log(user);
console.log(user[Symbol('uid')]); // Undefined
console.log(Symbol('uid') === Symbol('uid')); // false

console.log(user.toString());

// Iterators & Generators
const company = {
  curEmployee: 0,
  employees: ['Pissuti', 'Apollo', 'Joana'],
  // next() {
  //   let done = false;
  //   if (this.curEmployee >= this.employees.length) {
  //     done = true;
  //   }
  //   const returnValue = {
  //     value: this.employees[this.curEmployee],
  //     done: done,
  //   };
  //   this.curEmployee++;

  //   return returnValue;
  // },
  getEmployee: function* employeeGenerator() {
    // let employee = company.next();

    // while(!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }

    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();

    // while(!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }

    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
};

// let employee = company.next();
// while(!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

const it = company.getEmployee();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (const employee of company) {
  console.log(employee);
}

console.log([...company]);

const persons = ['Apollo', 'Pissuti', 'Joana'];
console.log(persons);

// Reflect API

const course = {
  title: 'Javascript',
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

console.log(course.toString());

const courseHandler = {
  get(obj, propertyName) {
    if(propertyName === 'length') {
      return 0;
    }
    return obj[propertyName] || 'NOT FOUND';
  },
  set(obj, propertyName, newValue) {
    if(propertyName === 'title') {
      return;
    }
    obj[propertyName] = newValue;
  }
};

const pCourse = new Proxy(course, courseHandler);

pCourse.title = 'Test';
pCourse.rating = 5;

console.log('Title', pCourse.title);
console.log('Length', pCourse.length);
console.log('Undefined property', pCourse.asdads);
console.log('Rating', pCourse.rating);