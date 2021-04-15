// 1
const sayHello = name => console.log('Hi ' + name);

// 2
const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello3 = () => console.log('Hi');
const sayHello4 = name => 'Hi ' + name;

sayHello('Pissuti');
sayHello2('Pissuti', 'Hi');
sayHello3();
console.log(sayHello4('Pissuti'));

// 3
const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);

sayHello5('Pissuti');
sayHello5('Pissuti', 'Hello');

// 4

const checkInput = (noEmptyStringHandler, ...strings) => {
  let hasEmptyString = false;

  for(string of strings) {
    if(!string) {
      hasEmptyString = true;
      break;
    }
  }

  if(!hasEmptyString) {
    noEmptyStringHandler();
  }
};

checkInput(() => {
  console.log('Not empty');
}, 'asd', 'asdas', 'aspld');