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
  const ingrediente = document.getElementById("ingrediente");
  const quantidade = document.getElementById("quantidade");
  const custo = document.getElementById("custo");

  const li = document.createElement("li");
  li.innerHTML = ingrediente.value;
  li.classList.add("item-ingrediente");
  listaIngredientes.appendChild(li);

  const spanQtd = document.createElement("span");
  spanQtd.innerHTML = quantidade.value;
  spanQtd.classList.add("qtdIngrediente");
  li.appendChild(spanQtd);

  const spanCusto = document.createElement("span");
  spanCusto.innerHTML = custo.value;
  spanCusto.classList.add("custoTotalIngrediente");
  li.appendChild(spanCusto);

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
