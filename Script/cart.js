export let cart = JSON.parse(localStorage.getItem('myshoop_cart')) || [];

export function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
}

export function saveCart() {
    localStorage.setItem('myshoop_cart', JSON.stringify(cart));
}

export function getCartCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

export function updateCartUI() {
    const cartCountSpan = document.querySelector('.panier span');
    if (cartCountSpan) {
        cartCountSpan.textContent = getCartCount();
    }
}

// Initialize UI on load
document.addEventListener('DOMContentLoaded', updateCartUI);
