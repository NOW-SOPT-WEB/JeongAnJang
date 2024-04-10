import { HOME } from "../constants";
import View from "./View";

export default class HeaderView extends View {
  setEvent() {
    this.addEvent("click", ".fa-house", this.navigateHome);
  }

  navigateHome() {
    location.href = HOME;
  }

  template() {
    console.log("헤더뷰 template 실행");
    return `
            <i class="fa-solid fa-house fa-2x"></i>
            <h2>정안이의 쇼핑몰</h2>
            <i class="fa-solid fa-bars fa-2x"></i>
        `;
  }
}
