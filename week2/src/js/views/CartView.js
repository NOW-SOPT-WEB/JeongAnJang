import { HOME } from "../constants";
import { qs, qsAll } from "../utils/domHelper";
import ModalView from "./ModalView";
import View from "./View";

export default class CartView extends View {
  constructor(element, props) {
    /**@todo props로 전달받게 수정 및 constructor 제거 */
    super(element, props);
    this.cartList = JSON.parse(localStorage.getItem("cartList")) || [];
    console.log("카트 뷰 내 props", props);
  }

  setEvent() {
    this.addEvent("click", ".delete_btn", this.deleteCart.bind(this));
    this.addEvent("click", ".cart_purchase_btn", this.openModal.bind(this));
    this.addEvent("click", ".navigate_home_btn", this.navigateHome.bind(this));
    this.addEvent("click", "#all_checkbox", this.handleAllCheckbox.bind(this));
    this.addEvent("click", ".fa-house", this.navigateHome.bind(this));
    this.addEvent(
      "click",
      ".all_delete_btn",
      this.deleteAllCheckedItems.bind(this)
    );
  }

  handleAllCheckbox(event) {
    const checkboxes = qsAll(".item_checkbox");
    console.log("체크박스:", checkboxes);
    checkboxes.forEach((checkbox) => (checkbox.checked = event.target.checked));
  }

  navigateHome() {
    /**@todo 중복 함수라 제거 후 props로 내려받아서 공용사용? */
    history.pushState({ page: "home" }, null, HOME);
    location.href = HOME;
  }

  getSelectedProducts() {
    const checkboxes = qsAll(".item_checkbox");
    const selectedProducts = [];

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const productId = checkbox.closest(".detail_item").id;
        const product = this.cartList.find(
          (item) => item.id.toString() === productId
        );
        console.log("product", product);
        if (product) {
          selectedProducts.push(product);
        }
      }
    });
    return selectedProducts;
  }

  openModal() {
    const selectedProducts = this.getSelectedProducts();
    new ModalView(qs(".purchase_modal"), selectedProducts);
    qs(".product_list_modal").showModal();
  }

  deleteCart(event) {
    const targetProduct = event.target.closest(".detail_item");
    const targetProductId = targetProduct.id;
    this.cartList = this.cartList.filter(
      (item) => item.id.toString() !== targetProductId
    );

    localStorage.setItem("cartList", JSON.stringify(this.cartList));
    this.render();
  }

  deleteAllCheckedItems() {
    const checkboxes = qsAll(".item_checkbox");
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const productId = checkbox.closest(".detail_item").id;
        this.cartList = this.cartList.filter(
          (item) => item.id.toString() !== productId
        );
      }
    });
    localStorage.setItem("cartList", JSON.stringify(this.cartList));
    this.render();
  }

  template() {
    /**@todo 헤더가 headerView랑 겹치는데 방법이 없을까 */
    return `
      <div class="cart_page_wrapper">
        <div class="cart_table_wrapper">
          <table class="cart_table">
            <thead>
              <tr>
               <th>체크</th>
               <th>이미지</th>
               <th>상품명</th>
               <th>카테고리</th>
               <th>가격</th>
               <th>비고</th>
              </tr>
            </thead>
            <tbody>
             <td><input type="checkbox" id="all_checkbox"><button type="button" class="all_delete_btn">체크된 것들 삭제하기</button></td>
             ${this.getCartItemTemplate()}
            </tbody>
          </table>
        </div>
      <div class="purchase_modal"></div>
      ${this.getButtonTemplate()}
      </div>
    `;
  }

  getCartItemTemplate() {
    const cartList = localStorage.getItem("cartList");
    const parseCartList = JSON.parse(cartList);
    return parseCartList
      .map(
        (item) =>
          `
          <tr id=${item.id} class="detail_item">
          <td><input type="checkbox" class="item_checkbox"></td>
          <td><img class="img_card" src="${item.imageUrl}" alt="${
            item.name
          }" /></td>
          <td>${item.name}</td>
          <td>${item.category}</td>
          <td>${item.price.toLocaleString()}</td>
          <td><button type="button" class="delete_btn">삭제하기</button></td>
        </tr>
    `
      )
      .join("");
  }

  getButtonTemplate() {
    return `
      <div class="btn_wrapper">
        <button class="cart_purchase_btn" type="button">구매하기</button>
        <button class="navigate_home_btn" type="button">홈으로 이동</button>
      </div>
    `;
  }
}
