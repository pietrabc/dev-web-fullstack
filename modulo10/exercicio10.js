// Exercício 5: Listagem de Itens do Cardápio
// Reutilizando o cardápio da lanchonete armazenado em um array do exercício 1, crie um programa que use
// um loop for...of para listar todos os itens do cardápio.

const cardapioLanchonete = [
  'Hamburguer',
  'Batata Frita',
  'Milkshake',
  'Hot Dog',
  'Pizza',
  'Nuggets',
  'Refrigerante',
  'Suco',
];

function listarItemCardapio(cardapio) {
  for (const item of cardapio) {
    console.log(item);
  }
}

listarItemCardapio(cardapioLanchonete);

// Exercício 6: Calcular o Total da Conta
// Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um
// cliente. Os itens do pedido estão armazenados em um array de objetos, onde cada objeto tem o nome do
// item e a quantidade. Crie um programa que use um loop for...of para percorrer o pedido do cliente e calcule o
// valor total da conta.

const cardapio6 = {
  Hamburguer: 10,
  BatataFrita: 5,
  Refrigerante: 2,
  Milkshake: 7,
};

const pedidoCliente = [
  { nome: 'Hamburguer', quantidade: 4 },
  { nome: 'BatataFrita', quantidade: 1 },
  { nome: 'Refrigerante', quantidade: 3 },
];

function calcularTotalDaConta(cardapio6, pedidoCliente) {
  let totalConta = 0;

  for (const pedido of pedidoCliente) {
    if (pedido.nome in cardapio6) {
      totalConta += cardapio6[pedido.nome] * pedido.quantidade;
    }
  }
  return totalConta;
}

const totalConta = calcularTotalDaConta(cardapio6, pedidoCliente);
console.log(`Total da conta: ${totalConta}`);
