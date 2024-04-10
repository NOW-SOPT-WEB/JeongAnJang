import View from "./View.js";
import storage from "../storage.js";
import { qs } from "../utils/domHelper.js";

export default class NavView extends View {
  setEvent() {
    this.addEvent("click", ".all", () =>
      this.renderFilterdProducts(storage.productData)
    );
    this.addEvent("click", ".cloth", () => this.filterCategory("shirt"));
    this.addEvent("click", ".shoes", () => this.filterCategory("shoes"));
    this.addEvent("click", ".books", () => this.filterCategory("books"));
  }

  filterCategory(category) {
    const filterdProducts = storage.productData.filter(
      (items) => items.category === category
    );
    this.renderFilterdProducts(filterdProducts);
  }

  renderFilterdProducts(products) {
    const mainSection = qs("main");

    mainSection.innerHTML = `<section id=${products[0].category}>
    <h2>${products[0].category}</h2>
    <div class="product_card_wrapper">
        ${this.getFilteredProductsTemplate(products)}
    </div>
  </section>`;
  }

  getFilteredProductsTemplate(products) {
    return products
      .map(
        (items) =>
          `
      <div class="product_card">
        <img
        class="product_card_img"
        src="${items.imageUrl}"
        alt="${items.name}"
        />
        <i class="fa-solid fa-heart"></i>
        <p>${items.name}</p>
        <p>${items.price}</p>
    </div>
          `
      )
      .join("");
  }

  template() {
    console.log("NavView 내 template 실행");
    return `
        <h2>판매 목록</h2>
        <ul>
          <li class="product_list">
            <div class="all">전체</div>
          </li>
          <li class="product_list"><div class="cloth">옷</div></li>
          <li class="product_list"><div class="shoes">신발</div></li>
          <li class="product_list"><div class="books">도서</div></li>
        </ul>          
        `;
  }
}
