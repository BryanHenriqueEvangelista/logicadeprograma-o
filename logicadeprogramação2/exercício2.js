// salário minimo
let salarioM = 1600;
// salário ganho
let salarioG = 4500;
// quantidades de salários mínimos ganhos
let qntSalariosG = qntsSalariosMin(salarioG, salarioM);

// função para calcular quantos salários mínimos são ganhos
function qntsSalariosMin(salarioG, salarioM) {
  let resultado;
  resultado = salarioG / salarioM;
  return resultado;
}

console.log("Você ganha", qntSalariosG, "salários mínimos atualmente.");
