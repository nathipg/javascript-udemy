const productList = {
  products: [
    {
      title: 'Pillow',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhgIBKlKWuX7DFR1yx_AgrJ086r9Ys2nLD9Jj41TJ_iAoEFWIwEZEqWxBEm3JJwEGfm8OauZH&usqp=CAc',
      price: 19.99,
      description: 'A pillow',
    },
    {
      title: 'Carpet',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN13Ky2XPf3AWcfzaqsV-zzcOduqEALsOFYj12QlvbfCZy0BgzilYCW5d5lDcgBC-RmSvmHNAT&usqp=CAc',
      price: 19.99,
      description: 'A carpet',
    },
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    for(const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}" />
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }

    renderHook.append(prodList);
  }
};

productList.render();