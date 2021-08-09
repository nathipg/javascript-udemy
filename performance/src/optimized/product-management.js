import { updateProducts } from './rendering';
import { products } from './products';

const titleEl = document.getElementById('title');
const priceEl = document.getElementById('price');

export function deleteProduct(prodId) {
  const deletedProductIndex = products.findIndex(prod => prod.id === prodId);
  const deleteProduct = products[deletedProductIndex];
  products.splice(deletedProductIndex, 1);
  updateProducts(deleteProduct, prodId, deleteProduct, false);
}

export function addProduct() {
  const title = titleEl.value;
  const price = priceEl.value;

  if (title.trim().length === 0 || price.trim().length === 0 || +price < 0) {
    alert('Please enter some valid input values for title and price.');
    return;
  }

  const newProduct = {
    id: new Date().toString(),
    title: title,
    price: price,
  };

  products.unshift(newProduct);
  updateProducts(newProduct, newProduct.id, deleteProduct, true);
}
