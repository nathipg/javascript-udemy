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
    while(currentEmployee < this.employees.length) {
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
    while(currentEmployee < this.employees.length) {
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

for(const employee of company) {
  console.log(employee);
}

console.log([...company]);


const persons = ['Apollo', 'Pissuti', 'Joana'];
console.log(persons);