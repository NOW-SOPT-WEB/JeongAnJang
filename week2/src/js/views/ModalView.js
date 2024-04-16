import View from "./View";
export default class ModalView extends View {
  setUp() {
    this.selectedProducts = this.props;
  }

  template() {
    console.log("template 내 this", this.selectedProducts);
    return `
      <dialog class="product_list_modal">
        <div class="modal_content">
            ${this.getSelectedProductTemplate()}
        </div>
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

    return Object.keys(this.selectedProducts)
      .map((key) => this.selectedProducts[key])
      .map(
        (item) =>
          `
              <div class="product_info">
                <img class="modal_product_img" src="${item.imageUrl}" alt="${item.name}">
                <div>
                  <p>Name: ${item.name}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
            `
      )
      .join("");
  }
}
