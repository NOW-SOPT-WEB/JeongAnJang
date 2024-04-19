import { qs } from "./utils/domHelper";
import HeaderView from "./views/HeaderView";
import NavView from "./views/NavView";
import View from "./views/View";
import "../css/style.css";
import BannerView from "./views/BannerView";
import MainSectionView from "./views/MainSectionView";
import storage from "./storage";
import { HOME } from "./constants";
import CartView from "./views/CartView";

export default class App extends View {
  constructor() {
    super(qs("#app"));
  }

  setUp() {
    this.initialState = {
      cartList: JSON.parse(localStorage.getItem("cartList")),
    };
    this.state = this.initialState;
    console.log("App 내 this.state", this.state);
  }

  mounted() {
    const {
      state: { cartList },
      filterCategory,
      renderFilterdProducts,
      navigateHome,
      navigateCart,
      openModal,
    } = this;

    new HeaderView(qs("header"), {
      cartList,
      navigateHome: navigateHome.bind(this),
      navigateCart: navigateCart.bind(this),
    });
    new BannerView(qs(".slide_animation_section"));
    new NavView(qs(".nav"), {
      filterCategory: filterCategory.bind(this),
      renderFilterdProducts: renderFilterdProducts.bind(this),
    });
    new MainSectionView(qs(".main"), {
      navigateCart: navigateCart.bind(this),
      renderFilterdProducts: renderFilterdProducts.bind(this),
    });
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
        id=${items.id}
        class="product_card_img"
        src="${items.imageUrl}"
        alt="${items.name}"
        />
        <i class="fa-solid fa-heart"></i>
        <p>${items.name}</p>
        <p>${items.price.toLocaleString()}</p>
    </div>
          `
      )
      .join("");
  }

  openModal() {
    qs("product_list_modal").showModal();
  }

  navigateHome() {
    location.href = HOME;
  }

  navigateCart() {
    qs("#app").innerHTML = "";
    new CartView(qs("#app"));
  }
}

new App();
