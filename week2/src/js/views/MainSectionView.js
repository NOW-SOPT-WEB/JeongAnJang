import { MESSAGES } from "../constants";
import storage from "../storage";
import { qs } from "../utils/domHelper";
import View from "./View";

export default class MainSectionView extends View {
  setUp() {
    this.filterCategory = this.props.filterCategory;
    this.renderFilterdProducts = this.props.renderFilterdProducts;
  }
  setEvent() {
    this.addEvent("click", ".product_card", this.addCart.bind(this));
  }

  addCart(event) {
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
        this.props.navigateCart();
        /**@todo 중복된 상품일 시 벨리데이션 추가 & 코드정리*/
      }
    } else {
      alert(MESSAGES.CANCEL_ADD_CART);
    }
  }

  template() {
    return this.renderFilterdProducts(storage.productData).bind(this);
  }
}
