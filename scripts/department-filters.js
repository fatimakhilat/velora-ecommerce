import { categories } from "./data/categories.js";
import { departments } from "./data/departments.js";



function getDepartmentsWithCount() {
  return departments.map((department) => {
    const count = categories.filter(
      (category) => category.departmentId === department.id
    ).length;

    return {
      ...department,
      count: count
    };
  });
}


export function generateDepartementHtml(department) {
  return `
      <label class="filter-option">
      <div class="filter-option-content">
        <input type="checkbox" name="departement" value="${department.id}" class="filter-checkbox">
        <span class="filter-option-label">
          ${department.name}
        </span>
      </div>
      <span class="filter-option-count">(${department.count})</span>
    </label>
  `
}


export function renderDepartments() {
  const departmentsWithCount = getDepartmentsWithCount();

  let departmentsHTML = "";

  departmentsWithCount.forEach((department) => {
    departmentsHTML += generateDepartementHtml(department);
  });

  document.querySelector(".js-filter-options").innerHTML =
    departmentsHTML;
}


export function renderAllCategoriesCount() {

  const count = categories.length;

  document.querySelector(" .js-all-categories-count").textContent = count;
}