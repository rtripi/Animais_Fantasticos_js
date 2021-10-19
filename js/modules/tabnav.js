export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu); // para selecionar cada item
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  // ativa a tab de acordo com o index da mesma

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });

    this.tabContent[index].classList.add(
      this.activeClass,
      this.tabContent[index].dataset.anime
    );
  }

  // Adiciona evento nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar primeiro item

      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
