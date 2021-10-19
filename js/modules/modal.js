import initAnimacaoScroll from "./scroll-animacao";

export default class Modal {
  constructor(openBTN, closeBTN, container) {
    this.botaoAbrir = document.querySelector(openBTN);
    this.botaoFechar = document.querySelector(closeBTN);
    this.containerModal = document.querySelector(container);

    // bind this ao callback para fzr referencia ao objeto da classe

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickFora = this.clickFora.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickFora(event) {
    // console.log(this); // containerModal
    if (event.target === this.containerModal) this.toggleModal();
  }

  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickFora);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
  }
}
