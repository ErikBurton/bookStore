let cart = [];

function addToCart(id, title, price) {
    const book = { id, title, price };
    cart.push(book);
    alert(`${title} has been added to your cart.`);
    updateCart();
}

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

function checkout() {
    window.location.href = 'checkout.html';
}

function submitOrder(event) {
    event.preventDefault();
    alert('Order submitted successfully!');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', loadCart);
