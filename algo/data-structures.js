const ages = [30, 29, 54];

age.push(60); // Constant Time Complexity: O(1)
age.unshift(10); // Linear Time Complexity: O(n)

const myAge = age[1]; // Constant Time Complexity: O(1)

// ----

const namePopularity = [
  { userName: 'pissuti', usages: 5 },
  { userName: 'apollo', usages: 6 },
];

const apolloUsages = namePopularity.find(person => person.userName === 'apollo').usages;
// BEST CASE: Constant Time Complexity => O(1)
// WORST CASE: Linear Time Complexity => O(n)
// AVERAGE CASE: Linear Time Complexity => O(n)


const nameMap = {
  'pissuti': 5,
  'apollo': 6,
};

const apolloUsages2 = nameMap['apollo']; // Constant Time Complexity: O(1)

// const nameRealMap = new Map();
