import { MESSAGES } from "../constants";
import storage from "../storage";
import { qs } from "../utils/domHelper";
import View from "./View";

export default class MainSectionView extends View {
  setEvent() {
    this.addEvent("click", ".product_card", this.addCart);
  }

  addCart(event) {
    confirm(MESSAGES.CONFIRM_ADD_CART);
    const targetProduct = event.target.closest(".product_card");
    const targetProductId = qs("img", targetProduct).id;
    const cartList = storage.productData.find(
      (item) => item.id.toString() === targetProductId
    );

    if (cartList) {
      localStorage.setItem("cartList", JSON.stringify(cartList));
      alert(MESSAGES.COMPLETE_ADD_CART);
    }
  }

  deleteCart() {
    
  }

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
            id=${items.id}
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
