import { qsAll } from "../utils/domHelper";

export default class View {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    if (!element) throw "no element";
    this.setEvent();
    this.render();
  }

  setEvent() {}

  render() {
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
