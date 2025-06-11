// Métodos Nativos de Number - Parte 01 - Number - valores numéricos - inteiros e ponto flutuante

let inteiro = 42;
let pontoFlutuante = 3.1456;
let pontoFlutuante2 = 3.1436;

// Verificar se o número é um inteiro - retornar booleano
console.log(Number.isInteger(inteiro)); // True
console.log(Number.isInteger(pontoFlutuante)); // False

// Formatar número de acordo com as casas decimais

console.log(pontoFlutuante.toFixed(2)); // digitos = casas decimais
console.log(pontoFlutuante2.toFixed(2)); 
console.log(pontoFlutuante.toFixed()); 

// Formatar número precisão específica
console.log(pontoFlutuante.toPrecision(4)); // números de dígitos que o numeral irá conter
console.log(inteiro.toPrecision(1));
// O número 42 é arrendondado e exibido  em notação cintífica como 4e+1 ou seja, 4 vezes 10 elevado a 1, que é 40
console.log(inteiro.toPrecision(2));
console.log(inteiro.toPrecision(3));