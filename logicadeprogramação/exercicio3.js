let v1 = 10;
let v2 = 340;

// função que verifica se a soma dos valores é maior que 100 e retorna o valor somado
function verificar(v1, v2) {
  let soma = v1 + v2;
  if (soma > 100) {
    return soma;
  }
}

console.log(verificar(v1, v2));
