function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li"); //para selecionar cada item
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo");

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", function () {
        activeTab(index);
      });
    });
  }
}
initTabNav();

const accordionList = document.querySelectorAll(".js-accordion dt");
const activeClass = "ativo";

accordionList[0].classList.add(activeClass);
accordionList[0].nextElementSibling.classList.add(activeClass);

function activeAccordion() {
  //console.log(this);
  this.classList.toggle(activeClass);
  this.nextElementSibling.classList.toggle(activeClass);
}
accordionList.forEach((item) => {
  item.addEventListener("click", activeAccordion);
});
