let saude = 100;
let dano = 99;

// função que verifica se o personagem está vivo
function estavivo(saude, dano) {
  if (dano >= saude) {
    return 1;
  } else {
    return 0;
  }
}

// função que retorna a saude do personagem
function hpstatus(saude, dano) {
  let hp = saude - dano;
  return hp;
}

// condicional que envia uma mensagem caso o personagem morra ou viva
if (estavivo(saude, dano) == 1) {
  console.log("Voce Morreu");
} else {
  console.log("Seu hp atual é", hpstatus(saude, dano));
}
