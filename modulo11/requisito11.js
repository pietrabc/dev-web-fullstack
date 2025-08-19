// Requisito 11: Crie uma função que receba um número inteiro e retorne um booleano
// indicando se o número é primo.
// Função: ehPrimo
// // 5
// Exemplo Entrada: // ehPrimo(7);
// // ehPrimo(4);
// Exemplo Saída: // true
// // false

function ehPrimo(numero) {
    if(numero <= 1) return false; // Números menores ou iguais a 1 não são primos

    for(let index = 2; index < numero; index++) {
        if (numero % index === 0) return false; // Se ele for divisivel por index, ele não é primo
    }
    return true; // entende não encontrou nenhum divisor
}

console.log(ehPrimo(7));
console.log(ehPrimo(4));
console.log(ehPrimo(3));