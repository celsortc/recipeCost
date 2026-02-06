export default function toggleIngredient() {
  const btnCalcular = document.querySelector(".btnCalcular");
  const listaIngredientes = document.querySelector(".lista-ingredientes");

  listaIngredientes.addEventListener("click", (e) => {
    if (e.target.className === "fechar") {
      e.target.parentElement.remove();
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

  const teste = document.createElement("span");
  teste.innerHTML = "teste";
  li.appendChild(teste);
  // const spanQtd = document.createElement("span");
  // spanQtd.innerHTML = quantidade.value;
  // spanQtd.classList.add("qtdIngrediente");
  // li.appendChild(spanQtd);

  const spanFechar = document.createElement("span");
  spanFechar.innerHTML = "X";
  spanFechar.classList.add("fechar");
  li.appendChild(spanFechar);
}
