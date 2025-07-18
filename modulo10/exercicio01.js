// Exercício 1: Verificação de Desconto
// Crie um programa verificaDesconto que verifique se um cliente tem direito a um desconto. Se o valor da
// compra for maior ou igual a R$ 100, o cliente recebe um desconto de 10%. Caso contrário, nenhum desconto
// é aplicado. O programa deve imprimir mensagens que retornem o se o cliente possui ou não o direito de
// retorno e o valor da compra no console.

function verificaDesconto(valorDaCompra) {
  if (valorDaCompra >= 100) {
    console.log('Parabéns! Você tem direito a um desconto de 10%');
    const valorComDesconto = valorDaCompra * 0.9;
    console.log(`Valor de Compra R$ ${valorComDesconto}`);
  } else {
    console.log('Desculpe, mas você não tem direito a nenhum desconto');
    console.log(`Valor de Compra R$ ${valorDaCompra}`);
  }
}

const valorDaCompra = 250;
verificaDesconto(valorDaCompra);
// Exercício 2: Verificação de Produto em Estoque
// Escreva um programa verificarEstoque que verifica se um produto está em estoque com base na quantidade
// disponível. Se a quantidade disponível for maior que zero, exiba "Produto disponível", caso contrário, exiba
// "Produto esgotado" no console.
// IF / ELSE IF / ELSE:

function verificarEstoque(quantidadeDisponivel) {
  if (quantidadeDisponivel > 0) {
    console.log('Produto Disponível');
  } else {
    console.log('Porduto Indisponível');
  }
}

const quantidade = 0;
verificarEstoque(quantidade);


// Exercício 4: Classificação de Desempenho de Vendas
// Você está gerenciando uma equipe de vendedores e deseja avaliar o desempenho de cada vendedor com
// base em suas vendas mensais em relação a uma meta estabelecida. Escreva um programa
// desempenhoIndividualDeVendas que determine a categoria de desempenho de um vendedor com base no
// percentual alcançado em relação à meta. As categorias incluem "Excelente Desempenho" (para vendedores
// que alcançaram ou excederam a meta), "Muito Bom Desempenho" (para vendedores com vendas entre 90% e
// 99% da meta), "Bom Desempenho" (para vendedores com vendas entre 80% e 89% da meta), "Desempenho
// Satisfatório" (para vendedores com vendas entre 61% e 79% da meta) e "Desempenho Insatisfatório" (para
// vendedores com vendas abaixo de 60% da meta). Execute o código e informe a categoria de desempenho do
// vendedor com base nas vendas mensais e na meta de vendas estabelecida.
// OPERADOR TERNÁRIO:

// Exercício 5: Verificação de Velocidade
// Crie uma função chamada verificarVelocidade que recebe a velocidade de um veículo como argumento e
// retorna true se o veículo estiver dentro do limite de velocidade (limite igual ou inferior a 80 km/h) e false caso
// exercicios.md 2023-09-22
// 2 / 2
// contrário, utilizando o operador ternário.

// Exercício 6: Semáforo de Trânsito
// Crie uma função mensagemSemaforo que recebe uma cor de semáforo como argumento (por exemplo,
// "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando a ação a ser tomada com base na cor
// do semáforo. Utilize o operador ternário para determinar a mensagem.
// SWITCH / CASE:

// Exercício 7: Prioridade no Trânsito
// Crie uma função chamada coresDoSemaforo que recebe uma cor de semáforo como argumento (por
// exemplo, "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando se é seguro passar ou se é
// necessário parar.

// Exercício 8: Verificação de Placa de Veículo
// Crie uma função verificarPlaca que recebe o último dígito da placa de um veículo como argumento (um
// número de 0 a 9) e retorna uma mensagem indicando o dia de rodízio em São Paulo, com base no último
// dígito da placa.
