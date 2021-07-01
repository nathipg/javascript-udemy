const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const dbRequest = indexedDB.open('StorageDummy', 1);
let db;

dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;
  const objStore = db.createObjectStore('products', { keyPath: 'id' });

  objStore.transaction.oncomplete = function (event) {
    const productStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');
    productStore.add({
      id: 'p1',
      title: 'First Prod',
      price: 19.99,
      tags: ['Nice', 'Cool'],
    });
  };
};

dbRequest.onsuccess = function (event) {
  db = event.target.result;
};

dbRequest.onerror = function (event) {
  console.error('ERROR!');
};

storeBtn.addEventListener('click', () => {
  if(db) {
    const productStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');
    productStore.add({
      id: 'p2',
      title: 'Second Prod',
      price: 19.99,
      tags: ['Nice', 'Cool'],
    });
  }
});

retrBtn.addEventListener('click', () => {
  if(db) {
    const productStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');

    const request = productStore.get('p2');
    request.onsuccess = function() {
      console.log(request.result);
    };
  }
});
