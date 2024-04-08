const tag = "[Store]";

export default class Store {
  constructor(storage) {
    console.log(tag);
    if (!storage) throw "no storage";
    this.storage = storage;
  }
}
