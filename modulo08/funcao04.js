// Retorno de uma função

let pedido = {
  id: 1234,
  nome: 'Pietra',
  email: 'pietra@example.com',
  lanche: 12,
  batataFrita: 6,
  suco: 4,
};

//Múltiplos Parâmetros
function enviarNotificacao(nome, idPedido, email) {
  // simular envio de email
  console.log(
    `Enviando email para ${email} confirmando o pedido de número ${idPedido}`
  );
  console.log(`Mensagem: ${nome} pedido confirmado`);
  // não possui retorno explícito
}

enviarNotificacao(pedido.nome, pedido.id, pedido.email);

// Função principal que irá calcular e retornar o valor do pedido

function processarPedido(id, item1, item2, item3) {
  let totalPedido = item1 + item2 + item3;
  console.log('Pedido: ' + id + ' Processado');
  console.log('O total do pedido é: R$' + totalPedido);
  return totalPedido; // encerrou a nossa função
  
}


let retornoDaFuncao = processarPedido(pedido.id, 
    pedido.batataFrita, pedido.lanche, pedido.suco);

console.log(retornoDaFuncao + retornoDaFuncao);

