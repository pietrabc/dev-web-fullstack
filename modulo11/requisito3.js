// Requisito 3: Crie uma função que receba dois valores e retorne verdadeiro se ambos forem
// considerados "truthy".
// Função: compararValores
// Exemplo Entrada: // compararValores(5, "texto");
// // compararValores(0, "texto");
// Exemplo Saída: // true
// // false


function compararValores(valor1, valor2) {
    let booleano = Boolean(valor1 && valor2);
    return booleano;
}

console.log(compararValores(5, 'texto')); // true
console.log(compararValores(0, 'texto'));
console.log(compararValores(0, false));

//(zero, null, undefined, false, string vazia = todos eles retornam false)