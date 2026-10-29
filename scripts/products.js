
import { products } from "./data/products.js";


export function generateBestSellerHTML(product) {

  let badgeHTML = "";

  if (product.badge) {
    // afficher le badge discount
    badgeHTML = `
       <span class="product-badge ${product.badge.type}">
         ${product.badge.label}
       </span>
    `;
  }

  let oldPriceHTML = "";

  if (product.oldPrice !== null) {
    // afficher l'ancien prix
    oldPriceHTML = ` 
         <span class="old-price">
           ${product.oldPrice.toFixed(2)}
         </span>`;
  }

  return `
  
  <div class="product-card" data-category="${product.category}" data-slug="${product.slug}" data-product-id="${product.id}">
  <!-- Product Image -->
  <div class="product-image-container">
  
      ${badgeHTML}
    <button class="product-wishlist" aria-label="Add to wishlist">
      <img src="assets/icons/heart.png" alt="">
    </button>
    <img src="${product.image.src}" alt="${product.image.alt}" class="product-img">
  </div>

  <!-- Product Information -->
  <div class="product-info">
    <h3 class="product-name">
      ${product.name}
    </h3>

    <!-- Rating -->
    <div class="product-rating">
      <img class="rating-stars" src="assets/icons/rating-${product.rating.stars * 10}.png" alt="${product.rating.stars} stars">
      <span class="review-count">
        (${product.rating.reviews})
      </span>
    </div>

    <!-- Price -->
    <div class="product-actions">
      <div class="product-price">
        <span class="current-price">
          $${product.price.toFixed(2)}
        </span>
        
          ${oldPriceHTML}
      </div>
      <!-- Add to Cart -->
      <button class="add-to-cart-button" aria-label="Add to cart">
        <img src="assets/icons/add-product.png" alt="">
      </button>
    </div>
  </div>

</div>



  `;

}

export function renderBestSellers() {

  let BestSellersHTML = "";

  const bestSellers = products.filter(
    product => product.isBestSeller
  );

  bestSellers.forEach(product => {
    BestSellersHTML += generateBestSellerHTML(product);
  });

  document.querySelector(".js-products-grid")
    .innerHTML = BestSellersHTML;
}