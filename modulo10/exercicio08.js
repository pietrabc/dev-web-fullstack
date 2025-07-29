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

// Caso Base - ponto de parada da recursão 
// Caso Recursivo - recursividade chamar ela mesma 

// 30 dias

const vendasDiarias = [
    30,15,25,18,22,30,28,24,27,23,19,21,26,17,16,29,31,14,20,22,
    18,24,25,30,28,27,29,26,21,17,
];

const precoPorHamburguer = 15;

function calcularValorTotalVendas(vendasDiarias, precoPorHamburguer, dia) {
    //caso base - ponto de parada => condição
    if (dia >= vendasDiarias.length) {
        return 0;
    } 

    //Caso recursivo
    const valorVendaDiaAtual = vendasDiarias[dia] * precoPorHamburguer;
    const valorProximoDia = calcularValorTotalVendas(vendasDiarias, precoPorHamburguer, dia + 1);

    return valorVendaDiaAtual + valorProximoDia;
}

const totalDeVendas = calcularValorTotalVendas(vendasDiarias, precoPorHamburguer, 0);
console.log(`O valor total das vendas no mês: ${totalDeVendas}`);









