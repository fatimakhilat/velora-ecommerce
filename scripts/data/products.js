

export const products = [
  {
    id: "product-001",
    name: "Premium Blender 1200W",
    slug: "premium-blender-1200w",
    category: "appliances",

    price: 89.99,
    oldPrice: 112.99,
    discount: 20,

    image: {
      src: "assets/images/products/Blender.png",
      alt: "Premium Blender 1200W"
    },

    rating: {
      stars: 5,
      reviews: 128
    },

    stock: 15,

    isBestSeller: true,
    isNewArrival: false
  },

  {
    id: "product-002",
    name: "Cast Iron Cookware Set 6 Pieces",
    slug: "cast-iron-cookware-set-6-pieces",
    category: "kitchen",

    price: 79.99,
    oldPrice: null,
    discount: null,

    image: {
      src: "assets/images/products/Cast Iron Cookware.png",
      alt: "Cast Iron Cookware"
    },

    rating: {
      stars: 4,
      reviews: 96
    },

    stock: 8,

    isBestSeller: true,
    isNewArrival: false
  },

  {
    id: "product-003",
    name: "Chef Knife Damascus Steel",
    slug: "chef-knife-damascus-steel",
    category: "kitchen",

    price: 59.99,
    oldPrice: null,
    discount: null,

    image: {
      src: "assets/images/products/Chef Knife.png",
      alt: "Chef Knife"
    },

    rating: {
      stars: 4,
      reviews: 64
    },

    stock: 30,

    isBestSeller: true,
    isNewArrival: false
  },

  {
    id: "product-004",
    name: "Smart Air Fryer 5.5L",
    slug: "smart-air-fryer-5.5l",
    category: "appliances",

    price: 129.99,
    oldPrice: null,
    discount: null,

    image: {
      src: "assets/images/products/Smart Air Fryer.png",
      alt: "Smart Air Fryer"
    },

    rating: {
      stars: 5,
      reviews: 76
    },

    stock: 48,

    isBestSeller: true,
    isNewArrival: false
  },

  {
    id: "product-005",
    name: "Electric Kettle 1.7L Stainless Steel",
    slug: "electric-kettle-1.7l-stainless-steel",
    category: "appliances",

    price: 79.99,
    oldPrice: null,
    discount: null,

    image: {
      src: "assets/images/products/Electric Kettle.png",
      alt: "Electric Kettle"
    },

    rating: {
      stars: 4.5,
      reviews: 89
    },

    stock: 59,

    isBestSeller: true,
    isNewArrival: false
  }
];


export function generateBestSellerHTML(product) {

  let discountHTML = "";

  if (product.discount !== null) {
    // afficher le badge discount
    discountHTML = `
       <span class="product-discount">
         -${product.discount}%
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
  
      ${discountHTML}
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