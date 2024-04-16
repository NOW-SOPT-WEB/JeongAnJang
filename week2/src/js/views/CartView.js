import View from "./View";

export default class CartView extends View {

  

  template() {
    return `
      <h2 class="product_list_title">장바구니</h2>
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
          ${this.getCartItemTemplate()}
        </tbody>
      </table>
      </div>
    `;
  }

  getCartItemTemplate() {
    const cartList = localStorage.getItem("cartList");
    const parseCartList = JSON.parse(cartList);
    console.log(parseCartList);
    return parseCartList
      .map(
        (item) =>
          `
          <tr>
          <td><input type="checkbox" class="item_checkbox"></td>
          <td><img class="img_card" src="${item.imageUrl}" alt="${item.name}" /></td>
          <td>${item.name}</td>
          <td>${item.category}</td>
          <td>${item.price}</td>
          <td><button type="button" class="delete_btn">삭제하기</button></td>
        </tr>
    `
      )
      .join("");
  }
}
