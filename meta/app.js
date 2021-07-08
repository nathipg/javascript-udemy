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

// Iterators
const company = {
  curEmployee: 0,
  employees: ['Pissuti', 'Apollo', 'Joana'],
  next() {
    let done = false;
    if (this.curEmployee >= this.employees.length) {
      done = true;
    }
    const returnValue = {
      value: this.employees[this.curEmployee],
      done: done,
    };
    this.curEmployee++;

    return returnValue;
  },
};

let employee = company.next();
while(!employee.done) {
  console.log(employee.value);
  employee = company.next();
}