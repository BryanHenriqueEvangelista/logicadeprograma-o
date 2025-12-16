// temperatura em Fahrenheit
let f = 100;
// temperatura em Celsius
let c = convertfahparaCel(f);
// função que converte Fahrenheit para Celsius
function convertfahparaCel(f) {
  let c = ((f - 32) * 5) / 9;
  return c;
}

console.log(c);
