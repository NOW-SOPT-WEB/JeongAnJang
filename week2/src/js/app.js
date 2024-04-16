import { qs } from "./utils/domHelper";
import HeaderView from "./views/HeaderView";
import NavView from "./views/NavView";
import View from "./views/View";
import "../css/style.css";
import BannerView from "./views/BannerView";
import MainSectionView from "./views/MainSectionView";
import storage from "./storage";
import { HOME } from "./constants";

export default class App extends View {
  constructor() {
    super(qs("#app"));
  }

  setUp() {
    this.initialState = {
      cartList: JSON.parse(localStorage.getItem("cartList")),
    };
    this.state = this.initialState;
    console.log("this.state2", this.state);
  }

  mounted() {
    const {
      state: { cartList },
      filterCategory,
      renderFilterdProducts,
      navigateHome,
    } = this;

    new HeaderView(qs("header"), {
      cartList,
      navigateHome: navigateHome.bind(this),
    });
    new BannerView(qs(".slide_animation_section"));
    new NavView(qs(".nav"), {
      filterCategory: filterCategory.bind(this),
      renderFilterdProducts: renderFilterdProducts.bind(this),
    });
    new MainSectionView(qs(".main"));
  }

  template() {
    return `
    <header class="header"></header>
    <section class="slide_section_wrapper">
      <div class="slide_animation_section"></div>
    </section>
    <nav class="nav"></nav>
    <main class="main"></main>
    <footer></footer>
    `;
  }

  filterCategory(category) {
    const filterdProducts = storage.productData.filter(
      (items) => items.category === category
    );

    this.renderFilterdProducts(filterdProducts);
  }

  renderFilterdProducts(products) {
    const mainSection = qs("main");

    mainSection.innerHTML = `<section id=${products[0].category}>
    <h2>${products[0].category}</h2>
    <div class="product_card_wrapper">
        ${this.getFilteredProductsTemplate(products)}
    </div>
  </section>`;
  }

  getFilteredProductsTemplate(products) {
    return products
      .map(
        (items) =>
          `
      <div class="product_card">
        <img
        class="product_card_img"
        src="${items.imageUrl}"
        alt="${items.name}"
        />
        <i class="fa-solid fa-heart"></i>
        <p>${items.name}</p>
        <p>${items.price}</p>
    </div>
          `
      )
      .join("");
  }

  openModal() {
    qs(".purchase_modal").showModal();
  }

  navigateHome() {
    location.href = HOME;
  }
}

new App();
