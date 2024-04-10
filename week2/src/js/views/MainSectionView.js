import storage from "../storage";
import View from "./View";

export default class MainSectionView extends View {
  template() {
    return `
        <section id="all">
        <h2>전체</h2>
        <div class="product_card_wrapper">
                ${this.getProductCardTemplate()}
        </div>
        </section
        `;
  }

  getProductCardTemplate() {
    return storage.productData
      .map(
        (items) => `
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
}
