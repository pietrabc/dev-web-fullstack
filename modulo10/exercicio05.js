// Exercício 1: Cálculo do Faturamento Semanal
// Você é o gerente de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres em uma
// semana. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia da
// semana. Crie um programa que calcule o valor total das vendas em uma semana.
// for (inicializador; condição; incremento) {bloco instrução}

const vendasPorDia = [20, 15, 25, 18, 22 ,30, 28];
const precoPorHamburguer = 10;

function calcularFaturamentoSemanal(vendasPorDia, precoPorHamburguer) {
    let faturamentoSemanal = 0;
    for (let index = 0; index < vendasPorDia.length; index++) {
        faturamentoSemanal += vendasPorDia[index] * precoPorHamburguer;
    }
    return faturamentoSemanal;
}

const faturamentoTotal = calcularFaturamentoSemanal(vendasPorDia, precoPorHamburguer);

console.log(`O faturamento total da semana é R$${faturamentoTotal}`);

// Exercício 2: Listagem do Cardápio Digital
// Você deseja criar um cardápio digital para sua lanchonete. Crie um programa que liste os itens do cardápio
// juntamente com seus preços. Utilize um loop for para percorrer o cardápio e exibi-lo.

const cardapio = [
    {nome: 'Hamburguer', preco: 10},
    {nome:'Batata frita', preco: 5},
    {nome: 'Refrigerante', preco: 3},
    {nome:'Milkshake', preco:7},
    {nome: 'Nuggets', preco: 6},
];

function exibirCardapio(cardapio) {
   console.log('Cardapio da lanchonete: ');
   for (let contador = 0; contador < cardapio.length; contador++) {
    console.log(`${cardapio[contador].nome}: ${cardapio[contador].preco}`);
   }
}

exibirCardapio(cardapio);