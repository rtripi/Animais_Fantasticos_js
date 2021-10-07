import clickOutside from "./outsideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function openMenu(e) {
    menuList.classList.add("active");
    menuButton.classList.add("active");
    clickOutside(menuList, eventos, () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  eventos.forEach((evento) => {
    menuButton.addEventListener(evento, openMenu);
  });
}