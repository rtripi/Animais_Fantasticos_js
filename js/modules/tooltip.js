export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do obj da classe aos callbacvks

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // move a tooltip com base em seus estilos de acordo com a posição do mouse

  onMouseMove(event) {
    this.toolTipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 2400 > window.innerWidth) {
      this.toolTipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.toolTipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  onMouseLeave(event) {
    this.toolTipBox.remove();
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // cria a tooltipbox e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");

    tooltipBox.classList.add("tooltip");

    tooltipBox.innerText = text;

    document.body.appendChild(tooltipBox);
    this.toolTipBox = tooltipBox;
  }

  // cria a tooltip e adiciona os eventos de mousemove e mouseleave ao target
  onMouseOver(event) {
    // cria a tooltipbos e coloca em uma propriedade
    this.criarTooltipBox(event.currentTarget);

    event.currentTarget.addEventListener("mousemove", this.onMouseMove);

    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }
  // adiciona os eventos de mouseovera cada tooltip

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
