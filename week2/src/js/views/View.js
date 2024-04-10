import { on, qsAll } from "../utils/domHelper";

export default class View {
  constructor(element) {
    console.log("View 실행");
    this.element = element;

    if (!element) throw "no element";
    this.setEvent();
    this.render();
  }

  setEvent() {}

  show(className) {
    this.element.classList.add(className);
  }

  render() {
    console.log("View 내 render실행");
    this.element.innerHTML = this.template();
    this.mounted();
  }

  template() {
    return "";
  }

  mounted() {}

  addEvent(eventType, selector, callback, element = this.element) {
    const children = [...qsAll(selector, element)];
    const isTarget = (element) =>
      children.includes(element) || element.closest(selector);

    element.addEventListener(eventType, (event) => {
      if (isTarget(event.target)) callback(event);
    });

    return this;
  }
}
