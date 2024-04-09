import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";
import "../css/style.css";
import { qs } from "../js/utils/domHelper.js";
import dark from "../../dist/검정반팔.jpeg";
import white from "../assets/흰색 반팔.jpeg";
import uglyShoes from "../assets/검정 어글리슈즈.png";
import grayShirt from "../assets/그레이 반팔.jpeg";
import newbal996 from "../assets/뉴발996.jpeg";
import newbal2002 from "../assets/뉴발2002.jpeg";
import reactDeepDive from "../assets/리액트 deepdive.jpeg";
import adidasDarkBlue from "../assets/아디다스 다크블루.jpeg";
import javascriptDeepDive from "../assets/자스 deepdive.jpeg";
import checkShirt from "../assets/체크셔츠.jpeg";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
  const test = qs(".product_card");
  console.log(tag, "adsfadf");
  // test.innerHTML += `<img class='product_card_img' src='${dark}' alt='검정 반팔'/>`;


  const store = new Store(storage);
  const views = {
    /**@todo views 하나씩 추가 */
  };

  new Controller(store, views);
}
