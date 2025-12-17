let valor = 100;

verificarsinal(valor);

// função que verifica se o numero é positivo, negativo ou 0
function verificarsinal(valor) {
  if (valor === 0) {
    console.log("seu numero é ; 0");
  } else {
    if (valor > 0) {
      console.log("seu numero é positivo", valor);
    } else {
      console.log("seu numero é negativo", valor);
    }
  }
}
