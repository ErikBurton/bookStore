let cart = [];

function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(book => {
    const item = document.createElement('div');
    item.classList.add('mb-2');
    item.innerHTML = `${book.title} - $${book.price}`;
    cartItems.appendChild(item);
    total += book.price;
  });
  totalPrice.innerText = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', loadCart);
