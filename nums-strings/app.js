// ------ Numbers 
console.log('MAX SAFE INTEGER', Number.MAX_SAFE_INTEGER); // Same as 2 ^ 53 - 1
console.log('MIN SAFE INTEGER', Number.MIN_SAFE_INTEGER);
console.log('MAX VALUE', Number.MAX_VALUE);


console.log(`0.2 + 0.4 = ${0.2 + 0.4}`);
console.log(`0.2 + 0.4 === 0.6? ${0.2 + 0.4 === 0.6}`);

console.log((5).toString(2)); // 5 in binary system
console.log(0.2.toString(2));
console.log(0.2.toFixed(20));
console.log((0.2 + 0.4).toFixed(2));

console.log(20.2.toFixed(20));


console.log('BIG INT', 90071992547409919999999n);
console.log('Convert to big int', BigInt(4));


console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY);
console.log('Is 10 finite?', Number.isFinite(10));
console.log('Is Infinity finite?', Number.isFinite(Infinity));

console.log('RANDOM', Math.random());


function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(5, 10));

// ------ Strings

const name = 'Pissuti';

console.log(`My name is ${name}`);


function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);

  let priceCategory = 'cheap';
  if(productPrice > 20) {
    priceCategory = 'fair';
  }

  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}

const prodName = 'Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);


const userInput = 'testtest.com';
//const regex = new RegExp('');
const regex = /^\S+@\S+\.\S+$/;
console.log(userInput, regex.test(userInput));
console.log('test@test.com', regex.test('test@test.com'));

console.log(regex.exec(userInput));
console.log(regex.exec('test@test.com'));