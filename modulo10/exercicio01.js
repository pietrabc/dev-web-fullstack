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









