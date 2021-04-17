const ids = new Set([1, 'Hi', 2, 3]);
ids.add(2);
ids.delete('Hi');
console.log(ids);
console.log(ids.has(2));

for (const entry of ids.entries()) {
  console.log(entry);
}
