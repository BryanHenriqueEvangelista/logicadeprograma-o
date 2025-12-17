let valor = 10;

tabuada(valor);

// função que cria a tabuada até o 10 do valor escolhido
function tabuada(valor) {
  for (let i = 1; i < 11; i++) {
    let resultado;
    resultado = valor * i;
    console.log(resultado);
  }
}
