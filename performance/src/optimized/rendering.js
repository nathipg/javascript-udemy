const productListEl = document.getElementById('product-list');

function createElement(product, prodId, deleteProductFn) {
  const newListEl = document.createElement('li');
  newListEl.innerHTML = `
    <h2>${product.title}</h2>
    <p>${product.price}</p>
  `;
  const prodDeleteButtonEl = document.createElement('button');
  prodDeleteButtonEl.textContent = 'DELETE';

  newListEl.id = prodId;

  prodDeleteButtonEl.addEventListener(
    'click',
    deleteProductFn.bind(null, prodId)
  );

  newListEl.appendChild(prodDeleteButtonEl);

  return newListEl;
}

export function renderProducts(products, deleteProductFn) {
  productListEl.innerHTML = '';
  const startTime = performance.now();
  products.forEach(product => {
    const newListEl = createElement(product, product.id, deleteProductFn);
    productListEl.appendChild(newListEl);
  });
  const endTime = performance.now();

  console.log('Time: ', endTime - startTime);
}

export function updateProducts(product, prodId, deleteProductFn, isAdding) {
  if(isAdding) {
    const newListEl = createElement(product, product.id, deleteProductFn);
    productListEl.insertAdjacentElement('afterbegin', newListEl);
  } else {
    const productEl = document.getElementById(prodId);
    productEl.remove();
  }
}
