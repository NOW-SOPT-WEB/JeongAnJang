import View from "./View.js";
import { qs } from "../utils/domHelper";

export default class NavView extends View {
  template() {
    console.log("NavView 내 template 실행");
    return `
        <nav class="nav">
        <h2>판매 목록</h2>
        <ul>
          <li class="product_list">
            <a href="#all">전체</a>
          </li>
          <li class="product_list"><a href="#cloth">옷</a></li>
          <li class="product_list"><a href="#shoes">신발</a></li>
          <li class="product_list"><a href="#books">도서</a></li>
        </ul>      
      </nav>
        `;
  }
}
