import { HOME } from "../constants";
import { qs } from "../utils/domHelper";
import CartView from "./CartView";
import View from "./View";

export default class HeaderView extends View {
  setUp() {
    console.log("헤더 뷰 내 this", this);
    this.navigateHome = this.props.navigateHome;
    this.navigateCart = this.props.navigateCart;
    this.cartList = this.props.cartList;
  }

  setEvent() {
    console.log("헤더 뷰 내 this.props", this.props);
    console.log("헤더 뷰 내 this.cartList", this.cartList);

    this.addEvent("click", ".fa-house", this.navigateHome);
    this.addEvent("click", ".fa-bars", this.openSideBar.bind(this));
    this.addEvent("click", ".side_bar_close_btn", this.closeSideBar.bind(this));
    this.addEvent("click", ".side_bar_product", this.navigateCart);
  }

  openSideBar() {
    qs(".side_bar").classList.add("open");
  }

  closeSideBar() {
    qs(".side_bar").classList.remove("open");
  }

  template() {
    return `
            <i class="fa-solid fa-house fa-2x"></i>
            <h2>정안이의 쇼핑몰</h2>
            <i class="fa-solid fa-bars fa-2x"></i>
            <div class="inner_body">
            <aside class="side_bar js-side_bar">
              <div>
                <button class="side_bar_close_btn">SideBar Close</button>
              </div>
               <ul>
                <li class="side_bar_interest">관심상품보기</li>
                <li class="side_bar_product">장바구니</li>
                <li class="side_bar_admin">관리자</li>
              </ul>
              </aside>
             </div>
        `;
  }
}
