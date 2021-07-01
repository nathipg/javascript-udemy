const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const dbRequest = indexedDB.open('StorageDummy', 1);

dbRequest.onupgradeneeded = function(event) {
  const db = event.target.result;
  const objStore = db.createObjectStore('products', {keyPath: 'id'});

  objStore.transaction.oncomplete = function(event) {
    const productStore = db.transaction('products', 'readwrite').objectStore('products');
    productStore.add({
      id: 'p1',
      title: 'First Prod',
      price: 19.99,
      tags: ['Nice', 'Cool']
    });
  };
};

dbRequest.onerror = function(event) {
  console.error('ERROR!');
};

storeBtn.addEventListener('click', () => {

});

retrBtn.addEventListener('click', () => {

});
