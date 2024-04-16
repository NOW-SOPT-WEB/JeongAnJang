import { qs } from "../utils/domHelper";
import View from "./View";
export default class ModalView extends View {
  setUp() {
    this.selectedProducts = this.props;
    this.selectedProductsList = Object.keys(this.selectedProducts).map(
      (key) => this.selectedProducts[key]
    );
  }

  setEvent() {
    this.addEvent("click", ".close_btn", this.closeModal);
  }

  closeModal() {
    qs(".product_list_modal").close();
  }

  template() {
    console.log("template 내 this", this.selectedProducts);
    return `
      <dialog class="product_list_modal">
        <div class="modal_content">
            ${this.getSelectedProductTemplate()}
        </div>
        <div class="total_amount">총합 금액:${this.totalAmount()} </div>
        <button class="close_btn">Close</button>
      </dialog>
    `;
  }

  getSelectedProductTemplate() {
    console.log("getSelectedProductTemplate 내 this", this.selectedProducts);
    console.log(
      "getSelectedProductTemplate 내 객체를 배열로",
      Object.keys(this.selectedProducts).map(
        (key) => this.selectedProducts[key]
      )
    );

    return this.selectedProductsList
      .map(
        (item) =>
          `
              <div class="product_info">
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
    let sum = 0;
    this.selectedProductsList.forEach((item) => {
      sum += item.price;
    });
    return sum.toLocaleString();
  }
}
