// split(delimiter[, limit]);

// let texto = 'maçã,banana,laranja,uva';
// let frutas = texto.split(','); // delimitador
// let frutasLimite = texto.split(',' , 3); // delimitador + limite de elementos da nossa lista
// console.log(frutas);
// console.log(frutasLimite);

let texto = 'maçã banana   laranja             uva';
let frutas = texto.split(/\s+/);

console.log(frutas);

// splice(indice, numeroDeItens, item1...)
frutas.splice(1, 1);
console.log(frutas);

