let v1 = 12,
  v2 = 8,
  v3 = 4;

verificarmaior(v1, v2, v3);
// função que verifica qual é o maior valor
function verificarmaior(v1, v2, v3) {
  if (v1 > v2) {
    console.log("o maior numero é o v1;", v1);
  } else if (v2 > v3) {
    console.log("o maior numero é o v2;", v2);
  } else {
    console.log("o maior numero é o v3;", v3);
  }
}
