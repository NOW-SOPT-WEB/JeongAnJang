import { qs } from "../utils/domHelper";
import View from "./View";

const tag = "headerView";

export default class HeaderView extends View {
  constructor() {
    super(qs("#app"));
    console.log(tag);
  }

  template() {
    console.log("헤더뷰템플릿 실행");
    return `<header>
    <i class="fa-solid fa-house fa-2x"></i>
    <h2>정안이의 쇼핑몰</h2>
    <i class="fa-solid fa-bars fa-2x"></i>
  </header>`;
  }
}
