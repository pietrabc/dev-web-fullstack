// Array

let lista = ['Monitor', 'Teclado', 'Mouse'];
console.log(lista.length);

console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);

lista[0] = 'Webcam';

console.log(lista);

lista[4] = 'Monitor';
console.log(lista);

console.log(lista.length);

// lista.length = lista.length - 2 ;
// console.log(lista);

let matrizVendas = [
  [100, 200, 300],
  [400, 500, 50],//loja B
  [700, 400, 450],
];

console.log(matrizVendas);
console.log(matrizVendas[1]);
matrizVendas[1][2] = 500;

console.log(matrizVendas[1]);

let resultadoLojaB = matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas[1][2];
console.log(resultadoLojaB);