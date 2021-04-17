/* const ids = new Set([1, 'Hi', 2, 3]);
ids.add(2);
ids.delete('Hi');
console.log(ids);
console.log(ids.has(2));

for (const entry of ids.entries()) {
  console.log(entry);
}
 */

const person1 = { name: 'Pissuti' };
const person2 = { name: 'Apollo' };

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

personData.set(person2, [{ date: 'few weeks ago', price: 100 }]);

console.log(personData);
console.log(personData.get(person1));

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}
