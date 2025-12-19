// salario mensal
let salaM = 1500;
// horas trabalhadas
let horasT = 110;
// salario ganho por horas trabalhadas
let salariohoras = calSaHoTra(salaM, horasT);

// função para calcular o salario por hora
function calSaHoTra(salaM, horasT) {
  let resultado;
  resultado = salaM / horasT;
  return resultado;
}

console.log(salariohoras);
