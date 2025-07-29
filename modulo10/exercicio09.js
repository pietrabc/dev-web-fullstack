// Exercício 3: Listagem de Itens do Cardápio
// Você é o gerente de uma lanchonete e deseja listar os itens do cardápio para exibição. Os itens do cardápio
// são armazenados em um objeto onde as chaves são os nomes dos itens e os valores são os preços. Crie um
// programa que use um loop for...in para listar todos os itens do cardápio juntamente com seus preços.

// for (variavel in objeto) {}

const cardapio1 = {
  Hamburguer: 10,
  BatataFrita: 5,
  Refrigerante: 2,
  Milkshake: 7,
};

function listarItensCardapio(cardapio1) {
  for (const item in cardapio1) {
    console.log(`${item}: R$${cardapio1[item]}`);
  }
}

listarItensCardapio(cardapio1);

// Exercício 4: Calcular o Total da Conta
// Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um
// cliente. Crie um programa que use um loop for...in para percorrer o pedido do cliente (um objeto com itens e
// quantidades) e calcule o valor total da conta.

const cardapio = {
  Hamburguer: 10,
  BatataFrita: 5,
  Refrigerante: 2,
  Milkshake: 7,
};

const pedidoCliente = {
  Hamburguer: 4,
  BatataFrita: 1,
  Refrigerante: 3,
  Milkshake: 2,
};

function calcularTotalDaConta(cardapio, pedidoCliente) {
  let totalConta = 0;

  for (const item in pedidoCliente) {
    if (item in cardapio) {
      totalConta += cardapio[item] * pedidoCliente[item];
    }
  }
  return totalConta;
}

const totalConta = calcularTotalDaConta(cardapio, pedidoCliente);
console.log(`Total da conta: ${totalConta}`);
