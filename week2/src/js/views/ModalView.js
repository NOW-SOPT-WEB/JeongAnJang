import { HOME, MESSAGES } from "../constants";
import { qs } from "../utils/domHelper";
import View from "./View";
export default class ModalView extends View {
  setUp() {
    this.selectedProductsList = Object.keys(this.props.selectedProducts).map(
      (key) => this.props.selectedProducts[key]
    );

    console.log("this.selectedProductsList", this.selectedProductsList);
  }

  navigateHome() {
    /**@todo 중복 함수라 제거 후 props로 내려받아서 공용사용? */
    location.href = HOME;
  }

  setEvent() {
    this.addEvent("click", ".close_btn", this.closeModal.bind(this));
    this.addEvent(
      "click",
      ".modal_purchase_btn",
      this.handleClickPurchaseBtn.bind(this)
    );
  }

  handleClickPurchaseBtn() {
    alert(MESSAGES.COMPLETE_PURCHASE);
    this.deleteCart();
    this.closeModal();
  }

  deleteCart() {
    const localStorageCartList =
      JSON.parse(localStorage.getItem("cartList")) || [];

    const updatedCartList = localStorageCartList.filter((selectedItem) => {
      return !this.selectedProductsList.some(
        (cartItem) => cartItem.id === selectedItem.id
      );
    });

    localStorage.setItem("cartList", JSON.stringify(updatedCartList));
  }

  closeModal() {
    qs(".product_list_modal").close();
  }

  template() {
    return `
      <dialog class="product_list_modal">
        <section class="modal_content">
            ${this.getSelectedProductTemplate()}
        </section>
        <div class="total_amount">총합 금액:${this.totalAmount()} </div>
        <section class="modal_btn_wrapper">
        <button class="modal_purchase_btn">최종 구매하기</button>
        <button class="close_btn">Close</button>
        </section>
      </dialog>
    `;
  }

  getSelectedProductTemplate() {
    return this.selectedProductsList
      .map(
        (item) =>
          `
              <div id=${item.id} class="product_info">
                <img class="modal_product_img" 
                     src="${item.imageUrl}" 
                     alt="${item.name}">
                <div>
                  <p>Name: ${item.name}</p>
                  <p>Price: ${item.price.toLocaleString()}</p>
                </div>
              </div>
            `
      )
      .join("");
  }

  totalAmount() {
    return this.selectedProductsList
      .reduce((acc, cur) => acc + cur.price, 0)
      .toLocaleString();
  }
}
