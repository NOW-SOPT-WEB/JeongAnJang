import View from "./View";

export default class CartView extends View {
  constructor() {
    super(document.createElement("div"));
    this.render();
  }
  template() {
    return `
      <h2>장바구니</h2>
      <div class="cart_items_wrapper">
      ${this.getCartItemTemplate()}
         
      </div>
    `;
  }

  getCartItemTemplate() {
    const cartList = localStorage.getItem("cartList");
    console.log(cartList);
  }
}
