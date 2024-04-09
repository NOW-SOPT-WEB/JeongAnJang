import storage from "./storage";
import { qs } from "./utils/domHelper";
import View from "./views/View";

export default class App extends View {
  constructor() {
    super(qs("#app"));
  }

  template() {
    console.log("App!!");
    console.log(storage.productData);

    return `
    <header>
      <i class="fa-solid fa-house fa-2x"></i>
      <h2>정안이의 쇼핑몰</h2>
      <i class="fa-solid fa-bars fa-2x"></i>
    </header> 
    <section class="slide_section_wrapper">
    <div class="slide_animation_section">
        <ul class="banner_list n1">
         ${this.getBannerSlideTemplate()}
        </ul>
        <ul class="banner_list n2">
        ${this.getBannerSlideTemplate()}
        </ul>
    </div>
</section> 
        `;
  }

  getBannerSlideTemplate() {
    return storage.productData
      .map(
        (items) =>
          `<li>
            <img 
            class="slide_img"
            src="${items.imageUrl}"
            alt="${items.name}"
            />
        </li>`
      )
      .join("");
    //배열을 문자열로 변환
  }
}
