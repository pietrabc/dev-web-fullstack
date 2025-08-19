// Requisito 8: Crie uma função que receba um array de gastos e retorne a quantidade de vezes
// que o maior gasto aparece nesse array.
// Função: maiorGasto
// Exemplo Entrada: // maiorGasto([10, 5, 20, 15]);
// Exemplo Saída: // 20

let entrada = [10, 5, 20, 15, 40, 22, 40, 32, 40];

function maiorGasto(gastos) {
    // Variável controle - que armazene a quantidade de vezes
    let contador = 0;
    // Inicializar o maior gasto sendo primeiro valor - valor para eu fazer o comparativo inicial
    let maiorGastoAtual = gastos[0];
    // Encontrar o maior gasto -- Loop
    for (let index = 0; index < gastos.length; index++) {
        if(gastos[index] > maiorGastoAtual){
            maiorGastoAtual = gastos[index]; // Atualizar o maior se encontrar um valor maior que o armazenado
        }
    }

    for(let i =0; i < gastos.length; i++) {
        if(gastos[i] === maiorGastoAtual) {
            contador++; // incremendar o contador com o valor se for igual ao maior
        }
    }
    return `O maior gasto é de ${maiorGastoAtual} e ele repete ${contador} vezes`;
}

console.log(maiorGasto(entrada));