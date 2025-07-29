// Exercício 3: Contagem de Dinheiro no Caixa
// Você é o caixa de uma lanchonete e precisa contar o dinheiro recebido até que a última venda do dia seja
// feita. Crie um programa que simule a contagem do dinheiro recebido a cada venda até o fechamento da
// lanchonete.

//while (condição) {bloco de instrução}

function realizarVendas(totalDeVendas) {
  let dinheiroRecebido = 0;
  let vendasRealizadas = 0;
  let vendasConcluidas = false;

  while (!vendasConcluidas) {
    const valorDaVenda = 20;

    //Simular venda
    dinheiroRecebido += valorDaVenda;
    vendasRealizadas++;

    //Verificar as vendas atingiramo o número
    if (vendasRealizadas >= totalDeVendas) {
      vendasConcluidas = true;
    }
  }
  console.log(`O total de dinheiro recebido: R$${dinheiroRecebido.toFixed(2)}`);
}

const totalDeVendasHoje = 42;
realizarVendas(totalDeVendasHoje);

// Exercício 4: Entrega de Pedidos Pendentes
// Você é o entregador de uma lanchonete e precisa entregar pedidos até que não haja mais pedidos
// pendentes. Crie um programa que simule a entrega de pedidos até que não haja mais pedidos na lista.

const pedidosPendentes = [
  'Hamburguer',
  'Batata frita',
  'Refrigerante',
  'Milshake',
  'Nuggets',
]; // iindice 0

function realizarEntregas(pedidosPendentes) {
  let pedidoAtual = "";
  console.log('Iniciando Entregas:');

  while (pedidosPendentes.length > 0) {
    pedidoAtual = pedidosPendentes.shift();
    console.log(`Entregando: ${pedidoAtual}`);
  }
  console.log('Todos os pedidos foram entregues!');
}

realizarEntregas(pedidosPendentes);
