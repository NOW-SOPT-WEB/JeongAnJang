const tag = "Views";

export default class View {
  constructor(element) {
    console.log(tag);

    if(!element) throw "no element"
    this.element = element
  }
}
