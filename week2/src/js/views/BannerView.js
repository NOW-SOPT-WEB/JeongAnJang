import storage from "../storage";
import View from "./View";

export default class BannerView extends View {
  template() {
    return `
                 <ul class="banner_list n1">
                  ${this.getBannerSlideTemplate()}
                 </ul>
                 <ul class="banner_list n2">
                  ${this.getBannerSlideTemplate()}
                 </ul>
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
