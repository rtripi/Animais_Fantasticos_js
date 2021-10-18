import ScrollSuave from "./modules/scroll_suave.js";
import initTabNav from "./modules/tabnav.js";
import initAccordion from "./modules/accordion.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";

import initfuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBTC from "./modules/fetchBtc.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
initTabNav();

initAccordion();
initAnimacaoScroll();

initModal();

initTooltip();

initDropdownMenu();

initMenuMobile();

initfuncionamento();

initFetchAnimais();

initFetchBTC();
