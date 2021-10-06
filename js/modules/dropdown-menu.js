import clickOutside from "./outsideClick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(e) {
    e.preventDefault();
    this.classList.add("drop-ativo");

    clickOutside(this, ["touchstart", "click"], () => {
      this.classList.remove("drop-ativo");
    });
  }
}
