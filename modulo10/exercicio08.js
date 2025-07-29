// Exercício 1: Contagem de Itens do Cardápio (Recursivo)
// Você é o gerente de uma lanchonete e deseja contar quantos itens diferentes estão no seu cardápio. Crie uma
// função recursiva em JavaScript que conte quantos itens diferentes existem no cardápio da lanchonete.

const cardapioLanchonete = [
  'Hamburguer',
  'Batata Frita',
  'Milkshake',
  'Hot Dog',
  'Pizza',
  'Nuggets',
  'Refrigerante',
]; // 6 elementos - indice 0 a 5

function contarItensDoCardapio(cardapio) {
  if (cardapio.length === 0) {
    return 0;
  } else {
    cardapio.pop();
    return 1 + contarItensDoCardapio(cardapio);
  }
}

const totalItens = contarItensDoCardapio(cardapioLanchonete);
console.log(`Total de itens no cardápio: ${totalItens}`);
// Exercício 2: Cálculo do Valor Total das Vendas (Recursivo)
// Você é o caixa de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres ao longo de
// um mês. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia do
// mês. Crie uma função recursiva em JavaScript que calcule o valor total das vendas de hambúrgueres no mês.
