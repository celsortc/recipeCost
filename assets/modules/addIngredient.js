export default function addIngredient() {
  console.log("funfou dmais");
  const ingrediente = document.getElementById("ingrediente");
  const quantidade = document.getElementById("quantidade");
  const custo = document.getElementById("custo");

  console.log(ingrediente.value);
}

const btnCalcular = document.querySelector(".btnCalcular");

btnCalcular.addEventListener("click", (e) => {
  e.preventDefault();
  addIngredient();
  //previne padrão do submit e chama função de adicionar ingredientes
});
