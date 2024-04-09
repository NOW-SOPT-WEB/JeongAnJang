const tag = "[Controller]";

export default class Controller {
  /**@todo views에 추가된 view 하나씩 삽입 */
  constructor(store, { views }) {
    console.log(tag);
    this.store = store;
  }
}
