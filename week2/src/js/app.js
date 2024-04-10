import storage from "./storage";
import { qs } from "./utils/domHelper";
import NavView from "./views/NavView";
import View from "./views/View";
import "../css/style.css";
import MainSectionView from "./views/MainSectionView";
import HeaderView from "./views/HeaderView";

export default class App extends View {
  constructor() {
    super(qs("#app"));
    console.log("App 실행");
  }

  mounted() {
    console.log("App 내 mounted 실행");
    new HeaderView(qs(".header"));
    new NavView(qs(".nav"));
    new MainSectionView(qs("main"));
  }

  template() {
    console.log("App 내 template실행!!");

    return `
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
  }
}

new App();
