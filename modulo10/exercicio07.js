// Exercício 5: Adivinhe o Número Secreto para Desconto
// Você deseja criar um programa que permite aos clientes da sua lanchonete adivinharem um número secreto
// para ganhar um desconto. Eles podem tentar quantas vezes quiserem, mas só ganharão o desconto quando
// adivinharem o número secreto. Crie um programa que use a estrutura do...while para permitir que os clientes
// tentem adivinhar o número secreto.

// do - sempre irá fazer pelo menos uma vez {} - while verifica se é verdadeiro

function adivinharNumeroSecreto() {
    const numeroSecreto = Math.floor(Math.random() * 100);
    let tentativa;
    let tentativas = 0;

    do {
        tentativa = Math.floor(Math.random() * 100); // gerando uma nova tentativa
        tentativas++;

        if (tentativa === numeroSecreto) {
            console.log(`Parabéns! Você adivinhou o número secreto (${numeroSecreto}) em ${tentativas} tentativas`)
        }

    } while (tentativa !== numeroSecreto);
}

adivinharNumeroSecreto();

// Exercício 6: Gerenciamento de Estoque de Itens em Falta
// Você é o gerente de uma lanchonete e está verificando o estoque de itens em falta. Crie um programa que
// permita que você insira os itens que estão em falta e os adicione ao estoque até que você decida encerrar o
// processo.