// Exercício 10: Crie uma função que receba uma palavra e retorne um booleano indicando se a
// palavra é um palíndromo.
// Função: ehPalindromo
// Exemplo Entrada: // ehPalindromo("arara");
// // ehPalindromo("cachorro");
// Exemplo Saída: // true
// // false

function ehPalindromo(palavra) {
    let palavraInvertida = '';

    for(let index = palavra.length - 1; index >=0; index--) {
        palavraInvertida += palavra[index]; // inverte a palavra
    }
    let ehPalindromo = palavra === palavraInvertida
    return ehPalindromo;
}

console.log(ehPalindromo('ana'));