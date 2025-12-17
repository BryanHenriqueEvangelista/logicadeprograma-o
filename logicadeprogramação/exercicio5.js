let posicao = Math.floor(Math.random() * 13300);

posicao = limitaposicao(posicao);
// função que limita o valor da posicao do personagem entre 0 a 100
function limitaposicao(posicao) {
  if (posicao > 100 || posicao < 100) {
    let valor;
    valor = Math.floor(Math.random() * 100);
    return valor;
  }
}

console.log(posicao);
