import clickOutside from "./outsideClick.js";

export default class DropdownMenu {
  constructor(menus, events) {
    this.dropdownMenus = document.querySelectorAll(menus);

    if (this.events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.activeClass = "drop-ativo";

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdown menu e adiciona a função que observa o click fora dele

  activeDropdownMenu(e) {
    e.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);

    clickOutside(element, this.events, () => {
      element.classList.remove("drop-ativo");
    });
  }

  // adiciona os eventos ao dropdown menu

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
