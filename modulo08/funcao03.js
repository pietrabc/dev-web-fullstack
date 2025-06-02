// function nomeFuncao(PARÂMETRO) {instrução}

function soma(numero1, numero2) {
    console.log( numero1 + numero2);
}

soma(10 , 20);
// nomefunction(ARGUMENTO) - Chamada da função (executa o bloco de instruções)


function calcularPreco(precoUnitario , quantidadeItens) {
    let total = precoUnitario * quantidadeItens;
    console.log('O total da sua compra é: R$ ' + total);
}

let camiseta = 30;
let quantidadeItem = 3;
calcularPreco(camiseta, quantidadeItem);