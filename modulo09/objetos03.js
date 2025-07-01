// Math.min() - retorna o valor mínimo encontrado dentro de uma lista de números
// Math.max() - retorna o valor máximo encontrado dentro de uma lista de números

console.log(Math.min(2, 54, 89, 65, 1, 0.5));

console.log(Math.max(2, 54, 89, 65, 1, 0.5));

let lista = [2, 45, 65, 78, 22, 101]; // spread operador ... (espalha informações da lista)
console.log(Math.min(...lista));
console.log(Math.max(...lista));
