// Requisito 9: Crie uma função que receba um array de números e retorne a média desses
// números.
// Função: calcularMedia
// Exemplo Entrada: // calcularMedia([10, 20, 30, 40]);
// Exemplo Saída: // 25

let numerosLista = [10, 20, 30, 40]

function calcularMedia(numeros) {
    let soma = 0;
    for (let index = 0; index < numeros.length; index++) {
        soma += numeros[index];
    }
    return soma / numeros.length;
}
console.log(calcularMedia(numerosLista));