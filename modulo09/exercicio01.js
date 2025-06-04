// Exercício 1: Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras
// maiúsculas.
// Exemplo de Saída: // “JAVASCRIPT é divertido”

let java = 'javascript é divertido';
let javaS = java.replace('javascript', 'javascript'.toUpperCase());
console.log(javaS);

// Exercício 2: Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e,
// em seguida, converta essa palavra para letras minúsculas.
// Exemplo de Saída: // “ aprendendo”

let aprender = 'Aprendendo Javascript';
let aprendeR = aprender.substring(0, 10).toLowerCase();
console.log(aprendeR);

// Exercício 3: Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por
// “Javascript”.
// Exemplo de Saída: // “Aprendendo Javascript”

let python = 'Aprendendo Python';
let pyt = python.slice(11);
let pyth = python.replace(pyt, 'JavaScript');
console.log(pyth);

// Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de
// produtos e remova o item 'sofá' da lista.
// Exemplo de Saída: “["cadeira", "mesa", "armário"]”

let moveis = 'cadeira, mesa, sofá, armário';
let lista = moveis.split(', ');
lista.splice(lista.indexOf('sofá'), 1);
console.log(lista);
