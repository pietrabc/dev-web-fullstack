// Requisito 12: Crie uma função que receba uma frase e retorne a quantidade de palavras que
// ela contém.
// Função: contarPalavras
// Exemplo Entrada: // contarPalavras("Olá, tudo bem?");
// Exemplo Saída: // 3

function contarPalavras(frase) {
    let contador = 0; 
    const palavras = frase.trim().split(' ');

    for(let index = 0; index < palavras.length; index++) {
       if (palavras[index] !== '') {
        contador++;
       } 
    }

    return contador;
}

let frase = 'Olá, tudo bem com você?';
console.log(contarPalavras(frase));