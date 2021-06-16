const customers = ['Pissuti', 'Apollo', 'Joana'];
const activeCustomers = ['Apollo', 'Joana'];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);