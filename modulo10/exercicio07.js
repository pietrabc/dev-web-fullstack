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
      console.log(
        `Parabéns! Você adivinhou o número secreto (${numeroSecreto}) em ${tentativas} tentativas`
      );
    }
  } while (tentativa !== numeroSecreto);
}

adivinharNumeroSecreto();

// Exercício 6: Gerenciamento de Estoque de Itens em Falta
// Você é o gerente de uma lanchonete e está verificando o estoque de itens em falta. Crie um programa que
// permita que você insira os itens que estão em falta e os adicione ao estoque até que você decida encerrar o
// processo.

const estoqueLanchonete = {
  hamburguer: 20,
  batataFrita: 15,
  refrigerante: 30,
  milkshake: 10,
};

function atualizarEstoque(estoque, itemFalta, quantidadeAdicionar) {
  if (estoque.hasOwnProperty(itemFalta)) {
    estoque[itemFalta] += quantidadeAdicionar;
    console.log(`Estoque atualizado: ${itemFalta}: ${estoque[itemFalta]}`);
  } else {
    console.log('Item não foi encontrado no estoque.');
  }
}

console.log(`Estoque da lanchonete:`);
console.log(estoqueLanchonete);

let continuarAdicionando = true;
let itemNaoEncontrado = false;

do {
  const itemFalta = 'hamburguer';
  const quantidadeAdicionar = 5;

  if (!estoqueLanchonete.hasOwnProperty(itemFalta)) {
    //Se o item não existe no estoque, exiba uma mensagem
    if (!itemNaoEncontrado) {
      console.log('Item não encontrado.');
      itemNaoEncontrado = true;
    }
  } else if (estoqueLanchonete[itemFalta] + quantidadeAdicionar > 50) {
    continuarAdicionando = false;
    console.log(
      `Limite do estoque ${itemFalta}: ${estoqueLanchonete[itemFalta]} foi atingido`
    );
  } else {
    atualizarEstoque(estoqueLanchonete, itemFalta, quantidadeAdicionar);
  }
} while (continuarAdicionando);

console.log('Estoque final:');
console.log(estoqueLanchonete);
