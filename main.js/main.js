(()=>{"use strict";function t(t,e,o){const i=document.documentElement,s="data-outside";function n(a){t.contains(a.target)||(t.removeAttribute(s),e.forEach((t=>{i.removeEventListener(t,n)})),o())}t.hasAttribute(s)||(e.forEach((t=>{setTimeout((()=>{i.addEventListener(t,n)}))})),t.setAttribute(s,""))}class e{constructor(t,e,o){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=o,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,o=Math.floor(e/100);let i=0;const s=setInterval((()=>{i+=o,t.innerText=i,i>e&&(t.innerText=e,clearInterval(s))}),25*Math.random())}animaNumeros(){this.numeros.forEach((t=>this.constructor.incrementarNumero(t)))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href"),o=document.querySelector(e);console.log(o),o.scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAcordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAcordionEvent()),this}}(".js-accordion dt").init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)})),this.tabContent[t].classList.add(this.activeClass,this.tabContent[t].dataset.anime)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}(".js-tabmenu li",".js-tabcontent section").init(),function(){const t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function o(){t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t.length&&(o(),window.addEventListener("scroll",o))}(),new class{constructor(t,e,o){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickFora=this.clickFora.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}clickFora(t){t.target===this.containerModal&&this.toggleModal()}addModalEvents(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickFora)}init(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvents(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.toolTipBox.style.top=`${t.pageY+20}px`,t.pageX+2400>window.innerWidth?this.toolTipBox.style.left=t.pageX-190+"px":this.toolTipBox.style.left=`${t.pageX+20}px`}onMouseLeave(t){this.toolTipBox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}criarTooltipBox(t){const e=document.createElement("div"),o=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=o,document.body.appendChild(e),this.toolTipBox=e}onMouseOver(t){this.criarTooltipBox(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}addTooltipsEvent(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipsEvent(),this}}("[data-tooltip]").init(),function(){function e(e){e.preventDefault(),this.classList.add("drop-ativo"),t(this,["touchstart","click"],(()=>{this.classList.remove("drop-ativo")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((o=>{t.addEventListener(o,e)}))}))}(),function(){const e=document.querySelector('[data-menu="button"]'),o=document.querySelector('[data-menu="list"]'),i=["click","touchstart"];function s(){o.classList.add("active"),e.classList.add("active"),t(o,i,(()=>{o.classList.remove("active"),e.classList.remove("active")}))}i.forEach((t=>{e.addEventListener(t,s)}))}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),o=t.dataset.horario.split(",").map(Number),i=new Date,s=i.getDay(),n=i.getHours(),a=-1!==e.indexOf(s),r=n>=o[0]&&n<o[1];a&&r&&t.classList.add("aberto")}(),function(t,o){const i=document.querySelector(".numeros-grid");!async function(){try{const t=await fetch("../../animaisApi.json");(await t.json()).forEach((t=>function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.total}</span>`,e}(t);i.appendChild(e)}(t))),new e("[data-numero]",".numeros","ativo").init()}catch(t){console.log(t)}}()}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(Error(t))}))})();