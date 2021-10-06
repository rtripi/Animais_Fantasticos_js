export default function initTooltip() {
  const toolTips = document.querySelectorAll("[data-tooltip]");

  toolTips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(event) {
    const toolTipBox = criarTooltipBox(this);
    toolTipBox.style.top = event.pageY + "px";
    toolTipBox.style.left = event.pageX + "px";

    onMouseMove.toolTipBox = toolTipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;

    this.addEventListener("mouseleave", onMouseLeave);
  }

  const onMouseLeave = {
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = event.pageY + 20 + "px";
      this.toolTipBox.style.left = event.pageX + 20 + "px";
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");

    tooltipBox.classList.add("tooltip");

    tooltipBox.innerText = text;

    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
