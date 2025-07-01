// DATE

const dataAtual = new Date(); // criamos uma instância
console.log(dataAtual.getFullYear());
console.log(dataAtual.getMonth()); // mês atual - 0 a 11( 0 será Janeirove 11 será Dezembro)
console.log(dataAtual.getDate());
console.log(dataAtual.getHours());
console.log(dataAtual.getMinutes());
console.log(dataAtual.getSeconds());

console.log(dataAtual);
let timestamp = dataAtual.getTime();

console.log(timestamp);
// timestamp - representação numérica - data referência 1 de janeiro de 1970

console.log(new Date(1751398445607));
console.log(new Date(1751398520580));

let agora = new Date ('2024-10-07');
console.log(agora.getMonth() + 1);