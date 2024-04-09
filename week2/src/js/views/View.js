const tag = "Views";

export default class View {
  constructor(element) {
    console.log(tag);

    if (!element) throw "no element";
    this.element = element;
    this.render();
  }

  show(className) {
    this.element.classList.add(className);
  }

  render() {
    this.element.innerHTML = this.template();
    this.mounted();
  }

  template() {
    return "";
  }

  mounted() {}
}
