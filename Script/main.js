import { produits } from "./Produit/produit.js";
import { initFilters } from "./filtre/filtre.js";

const MesProduitContainer = document.querySelector(".product-galleries");

export function renderProducts(productsToRender) {
  MesProduitContainer.innerHTML = "";
  productsToRender.forEach(item => {
    const card = document.createElement("div");
    card.className = 'item';
    card.innerHTML = `
      <div>
          <img src="${item.image}" alt="${item.id}">
          <div class="item-content">
              <h3>${item.id}</h3>
              <span>${item.prix}</span>
                              
              <button>
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

