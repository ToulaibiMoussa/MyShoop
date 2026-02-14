import { produits } from "./Produit/produit.js";
import { initFilters } from "./filtre/filtre.js";
import { addToCart, updateCartUI } from "./cart.js";

const MesProduitContainer = document.querySelector(".product-galleries");
// Remove or comment out since the items are dynamic
// const addToCard = document.querySelectorAll(".add-to-cart");

export function renderProducts(productsToRender) {
  MesProduitContainer.innerHTML = "";
  
  if (productsToRender.length === 0) {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.innerHTML = `
      <i class="fas fa-search"></i>
      <p>Aucun produit ne correspond à votre recherche</p>
    `;
    MesProduitContainer.appendChild(noResults);
    return;
  }

  productsToRender.forEach(item => {
    const card = document.createElement("div");
    card.className = 'item';
    card.innerHTML = `
      <div>
          <img src="${item.image}" alt="${item.id}">
          <div class="item-content">
              <h3>${item.id}</h3>
              <span>${item.prix}</span>
                              
              <button class="add-to-cart" 
                      data-name="${item.id}" 
                      data-price="${item.prix}" 
                      data-image="${item.image}">
                  <i class="fas fa-cart-plus"></i>
                  Ajouter au panier
              </button>
          </div>
      </div>`;
    MesProduitContainer.appendChild(card);
  });
}

// Initial render
renderProducts(produits);

// Initialize filters
initFilters(produits, renderProducts);

// Initial Cart UI Update
updateCartUI();

// Event Delegation for "Add to Cart"
MesProduitContainer.addEventListener("click", (e) => {
  const button = e.target.closest(".add-to-cart");
  if (button) {
    const product = {
      id: button.dataset.name,
      image: button.dataset.image,
      prix: button.dataset.price,
      quantity: 1
    };
    addToCart(product);
  }
});


