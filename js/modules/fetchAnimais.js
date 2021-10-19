import AnimaNumeros from "./numeros.js";

export default function fetchAnimais(url, target) {
  // cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  const numerosGrid = document.querySelector(target);

  // preenche cada animal no dom
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    // console.log(divAnimal);
    numerosGrid.appendChild(divAnimal);
  }
  // anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // puxa os animais atraves de um arquivo json e cria cada animal utilizando create animal

  async function criarAnimais() {
    try {
      // fetch espera resposta
      const animaisResponse = await fetch(url);
      // transforma a resposta em json
      const animaisJSON = await animaisResponse.json();
      // após transformar em json, ativa as funções para preencher e animar os numeros
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
