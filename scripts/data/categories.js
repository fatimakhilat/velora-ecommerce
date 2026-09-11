
export const categories = [
  {
    id: "kitchen",
    name: "Kitchen",
    image: {
      src: "assets/images/categories/kitchen.png",
      alt: "Kitchen products"
    },
    icon: "assets/icons/pot.png",
    count: 120
  },

  {
    id: "appliances",
    name: "Appliances",
    image: {
      src: "assets/images/categories/appliances.png",
      alt: "Appliances products"
    },
    icon: "assets/icons/mixer-blender.png",
    count: 85
  },

  {
    id: "tableware",
    name: "Tableware",
    image: {
      src: "assets/images/categories/tableware.png",
      alt: "Tableware products"
    },
    icon: "assets/icons/tableware-set.png",
    count: 150
  },

  {
    id: "home-decor",
    name: "Home Decor",
    image: {
      src: "assets/images/categories/home decor.png",
      alt: "Home Decor products"
    },
    icon: "assets/icons/armchair.png",
    count: 95
  },

  {
    id: "electronics",
    name: "Electronics",
    image: {
      src: "assets/images/categories/electronics.png",
      alt: "Electronics products"
    },
    icon: "assets/icons/monitor.png",
    count: 200
  },

  {
    id: "beauty",
    name: "Beauty",
    image: {
      src: "assets/images/categories/beauty.png",
      alt: "Beauty products"
    },
    icon: "assets/icons/lipstick.png",
    count: 110
  },

  {
    id: "accessories",
    name: "Accessories",
    image: {
      src: "assets/images/categories/accessories.png",
      alt: "Accessories products"
    },
    icon: "assets/icons/handbag.png",
    count: 130
  },

  {
    id: "sale",
    name: "Sale",
    image: {
      src: "assets/images/categories/sale.png",
      alt: "Promotions"
    },
    icon: "assets/icons/discount.png",
    count: 250
  }
];


export function generateCategoryHTML(category) {


  return `

    <a href="shop.html?category=${category.id}" class="category-card js-category-card">
      <div class="category-img">
        <img src="${category.image.src}" alt="${category.image.alt}" class="category-image">
      </div>
      <div class="category-details">
        <div class="category-icon-wrapper">
          <img src="${category.icon}"
          alt="" class="category-icon">
        </div>
        <div class="category-info">
          <span class="category-name">
            ${category.name}
          </span>
          <span class="category-count">${category.count}+ items</span>
        </div>
      </div>
    </a>

  `;

}

export function renderCategories() {

  let categoriesHTML = "";
  categories.forEach((category) => {
    categoriesHTML += generateCategoryHTML(category);
  });
  document.querySelector(".js-categories-grid")
    .innerHTML = categoriesHTML;
}