import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag);

  const store = new Store(storage);
  const views = {
    /**@todo views 하나씩 추가 */
  };

  new Controller(store, views);
}
