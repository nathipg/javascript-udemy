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
