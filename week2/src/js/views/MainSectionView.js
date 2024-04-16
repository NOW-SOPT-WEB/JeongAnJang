import { MESSAGES } from "../constants";
import storage from "../storage";
import { qs } from "../utils/domHelper";
import View from "./View";

export default class MainSectionView extends View {
  setUp() {
    this.navigateCart = this.props.navigateCart;
  }

  setEvent() {
    this.addEvent("click", ".product_card", this.addCart.bind(this));
  }

  addCart(event) {
    console.log("addCart 내 this", this);
    const userConfirmed = confirm(MESSAGES.CONFIRM_ADD_CART);
    if (userConfirmed) {
      const targetProduct = event.target.closest(".product_card");
      const targetProductId = qs("img", targetProduct).id;
      const cartList = JSON.parse(localStorage.getItem("cartList")) || [];
      const selectedProduct = storage.productData.find(
        (item) => item.id.toString() === targetProductId
      );
      if (selectedProduct) {
        cartList.push(selectedProduct);
        localStorage.setItem("cartList", JSON.stringify(cartList));
        alert(MESSAGES.COMPLETE_ADD_CART);
        this.navigateCart();
        /**@todo 중복된 상품일 시 벨리데이션 추가 & 코드정리*/
      }
    } else {
      alert(MESSAGES.CANCEL_ADD_CART);
    }
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
            <p>${items.price.toLocaleString()}원</p>
        </div>
    `
      )
      .join("");
  }
}
