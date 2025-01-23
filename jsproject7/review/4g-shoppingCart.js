const shoppingCart = {
  items: [
    { productName: "apples", price: 8.59, quantity: 40 },
    { productName: "oranges", price: 12, quantity: 100 }
  ],

  addItemToCart(item) {
    this.items.push(item)
  },
}

shoppingCart.addItemToCart({ productName: "honey", price: 15.67, quantity: 4 });

console.log(shoppingCart.items);