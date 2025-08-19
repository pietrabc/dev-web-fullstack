// Exercício 7: Crie uma função que receba uma frase e retorne a quantidade de vogais contidas
// nela.
// Função: contarVogais.
// Exemplo Entrada: // contarVogais("Olá, tudo bem?");
// Exemplo Saída:

function contarVogais(frase) {
    let contador = 0;
    for(let index = 0; index < frase.length; index++) {
        const letra = frase[index].toLowerCase();
        if (
            letra === 'a' ||
            letra === 'á' ||
            letra === 'e' ||
            letra === 'i' ||
            letra === 'o' ||
            letra === 'u' 
        ) {
            contador++;
        }
 }
 return contador;
}

console.log(contarVogais('Olá, tudo bem?'));