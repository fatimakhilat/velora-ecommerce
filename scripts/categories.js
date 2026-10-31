import { categories } from "./data/categories.js"

import { saleCollection } from "./data/collections.js"


export function generateCategoryHTML(category) {

  return `

    <a href="shop.html?category=${category.id}" class="category-card js-category-card">
      <div class="category-img">
        <img src="${category.image.src}" alt="${category.image.alt}" class="category-image">
      </div>
      <div class="category-info">
          <span class="category-name">
            ${category.name}
          </span>
          <span class="category-count">${category.count}+ items
          </span>
      </div>
    </a>

  `;

}



export function renderCategories() {

  const featuredCategories = categories.filter(
    (category) => category.featured === true
  );

  const homeCategories = [
    ...featuredCategories,
    saleCollection
  ];

  let categoriesHTML = "";

  homeCategories.forEach((category) => {
    categoriesHTML += generateCategoryHTML(category);
  });
  document.querySelector(".js-categories-grid")
    .innerHTML = categoriesHTML;
}



export function generateCategoryCardHTML(category) {

  return `
        <a href="shop.html?category=${category.id}" class="category-page-card js-category-card">
        <div class="category-page-img">
          <img src="${category.image.src}" alt="${category.image.alt}" class="category-page-image">
        </div>
          <div class="category-page-info">
            <span class="category-page-name">
              ${category.name}
            </span>
            <span class="category-page-count">
              ${category.count}+ items
            </span>
          </div>
      </a>

  `
}

export function updateCategoriesResultsCount(categoriesList) {
  const count = categoriesList.length;

  document.querySelector(
    ".js-categories-results-count"
  ).textContent = `${count} ${count === 1 ? "Category" : "Categories"}`;
}


export function renderAllCategories(categoriesList = categories) {
  let categoriesHTML = "";

  categoriesList.forEach((category) => {
    categoriesHTML += generateCategoryCardHTML(category);
  });

  document.querySelector(
    ".js-categories-main-grid"
  ).innerHTML = categoriesHTML;

  updateCategoriesResultsCount(categoriesList);
}
