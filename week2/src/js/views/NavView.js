import View from "./View.js";
import storage from "../storage.js";

export default class NavView extends View {
  setEvent() {
    const { filterCategory, renderFilterdProducts } = this.props;

    this.addEvent("click", ".all", () =>
      renderFilterdProducts(storage.productData)
    );
    this.addEvent("click", ".cloth", () => filterCategory("shirt"));
    this.addEvent("click", ".shoes", () => filterCategory("shoes"));
    this.addEvent("click", ".books", () => filterCategory("books"));
  }

  template() {
    return `
        <h2>판매 목록</h2>
        <ul>
          <li class="product_list">
            <div class="all">전체</div>
          </li>
          <li class="product_list"><div class="cloth">옷</div></li>
          <li class="product_list"><div class="shoes">신발</div></li>
          <li class="product_list"><div class="books">도서</div></li>
        </ul>          
        `;
  }
}
