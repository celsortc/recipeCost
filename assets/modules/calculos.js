export default function calculos() {}
export function calculoCustoReceita(qtdTotal, custoPacote, qtdUtilizada) {
  const custoIngredienteReceita = (+custoPacote / +qtdTotal) * +qtdUtilizada;

  return console.log(custoIngredienteReceita);
}
