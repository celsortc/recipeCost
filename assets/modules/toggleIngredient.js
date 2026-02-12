import { calculoCustoReceita } from "./calculos.js";

export default function toggleIngredient() {
  const btnCalcular = document.querySelector(".btnCalcular");
  const listaIngredientes = document.querySelector(".lista-ingredientes");
  showData(listaIngredientes);

  listaIngredientes.addEventListener("click", (e) => {
    if (e.target.className === "fechar") {
      e.target.parentElement.remove();
      saveData(listaIngredientes);
    }
  });

  btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();
    createIngredient(listaIngredientes);

    //previne padrão do submit e chama função de adicionar ingredientes
  });
}

function createIngredient(listaIngredientes) {
  const ingredienteNome = document.getElementById("ingrediente");
  const qtdPacote = document.getElementById("quantidade");
  const precoPacote = document.getElementById("custo");
  const qtdUtilizada = document.getElementById("utilizado");

  const ingrediente = {
    nome: ingredienteNome.value,
    quantidadeTotal: qtdPacote.value,
    custoPacote: precoPacote.value,
    quantidadeUtilizada: qtdUtilizada.value,
    custoDaReceita: calculoCustoReceita(
      qtdPacote.value,
      precoPacote.value,
      qtdUtilizada.value,
    ),
  };

  const li = document.createElement("li");
  li.innerHTML = ingredienteNome.value;
  li.classList.add("item-ingrediente");
  listaIngredientes.appendChild(li);

  const spanQtd = document.createElement("span");
  spanQtd.innerHTML = qtdPacote.value;
  spanQtd.classList.add("qtdIngrediente");
  li.appendChild(spanQtd);

  const spanPrecoPacote = document.createElement("span");
  spanPrecoPacote.innerHTML = precoPacote.value;
  spanPrecoPacote.classList.add("Ingrediente");
  li.appendChild(spanPrecoPacote);

  const custoUnitario = document.createElement("span");

  const spanFechar = document.createElement("span");
  spanFechar.innerHTML = "X";
  spanFechar.classList.add("fechar");
  li.appendChild(spanFechar);

  saveData(listaIngredientes);
}

function saveData(listaIngredientes) {
  localStorage.setItem("dados", listaIngredientes.innerHTML);
}

function showData(listaIngredientes) {
  listaIngredientes.innerHTML = localStorage.getItem("dados");
}
