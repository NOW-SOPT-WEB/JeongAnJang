import { HOME } from "../constants";
import { qs } from "../utils/domHelper";
import View from "./View";

export default class HeaderView extends View {
  constructor(element, props) {
    super(element, props);
    this.sideBarOpen = false;
  }

  setEvent() {
    console.log("this.props", this.props);
    this.addEvent("click", ".fa-house", this.navigateHome);
    this.addEvent("click", ".fa-bars", this.toggleSideBar.bind(this));
    this.addEvent(
      "click",
      ".side_bar_close_btn",
      this.toggleSideBar.bind(this)
    );
  }

  navigateHome() {
    location.href = HOME;
  }

  toggleSideBar() {
    if (this.sideBarOpen) {
      console.log(this.sideBarOpen);
      this.closeSideBar();
    } else {
      console.log(this.sideBarOpen);
      this.openSideBar();
    }
  }

  openSideBar() {
    qs(".inner_body").classList.add("open");
    qs(".side_bar").classList.add("open");

    this.sideBarOpen = true;
  }

  closeSideBar() {
    qs(".inner_body").classList.remove("open");
    qs(".side_bar").classList.remove("open");

    this.sideBarOpen = false;
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
                <li class="side_bar_home">Home</li>
                <li class="side_bar_product">Product</li>
              </ul>
              </aside>
             </div>
        `;
  }
}

/**@todo 사이드 바 애니메이션 */
