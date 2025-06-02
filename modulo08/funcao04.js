// Retorno de uma função

let pedido = {
    id: 1234,
    nome: 'Pietra',
    email: 'pietra@example.com',
    lanche: 12,
    batataFrita: 6,
    suco: 4,
};

function enviarNotificacao(nome, idPedido, email) {
    // simular envio de email
    console.log(`Enviando email para ${email} confirmando o pedido de número ${idPedido}`);
    console.log(`Mensagem: ${nome} pedido confirmado`) 
    // não possui retorno explícito
} 

enviarNotificacao(pedido.nome, pedido.id, pedido.email);