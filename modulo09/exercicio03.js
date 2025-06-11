// Exercício 1: Crie um objeto chamado Venda com as propriedades produto, quantidade,
// precoUnitario e desconto. Adicione um método chamado calcularTotal que calcule o
// valor total da venda, considerando o desconto. Adicione também um método chamado
// detalharVenda que retorne uma string detalhando a venda.
const venda = {
    produto: livro,
    quantidade: 5,
    precoUnitario: 20,
    desconto: 0,

    calcularTotal: function() {
        const total = this.quantidade * this.precoUnitario;
        return total - (total)
    }
}


// Exercício 2: Adicione um método ao objeto Venda chamado aplicarDesconto que recebe
// um valor percentual e atualiza o desconto da venda. Aplique um desconto de 10% e verifique o
// valor total com o método calcularTotal.


// Exercício 3: Adicione um método ao objeto Venda chamado atualizarQuantidade que
// recebe um número e altera a quantidade do produto na venda. Atualize a quantidade e
// verifique o total da venda após a atualização.


// Exercício 4: Adicione um método chamado verificarEstoque que recebe a quantidade
// disponível em estoque e retorna uma mensagem fixa indicando se a venda pode ser realizada
// ou se é necessário ajustar a quantidade


// Exercício 5: Retorne um array com todas as suas propriedades e valores do objeto Venda.
// Exiba as propriedades e valores em um formato legível.


// Exercício 6: Obtenha um array com os nomes de todas as propriedades do objeto Venda.
// Exiba as propriedades do objeto.


// Exercício 7: Obtenha um array com todos os valores das propriedades do objeto Venda.
// Exiba os valores das propriedades.


// Exercício 8: Verifique se o objeto Venda possui a propriedade desconto. Retorne a
// verificação diretamente em uma mensagem fixa.


// Exercício 9: Crie um novo objeto NovaVenda que contenha as mesmas propriedades e
// valores de Venda, mas com um produto e quantidade diferentes. Exiba o novo objeto
// NovaVenda.


// Exercício 10: Adicione uma nova propriedade data ao objeto Venda, definindo-a como não
// enumerável. Exiba todas as propriedades do objeto Venda e, em seguida, exiba o valor da
// nova propriedade data separadamente.


// Exercício 11: Crie um novo objeto DescontoEspecial que herde as propriedades do objeto
// Venda, mas com um desconto fixo de 20%. Exiba as propriedades do novo objeto e verifique
// se o desconto foi aplicado corretamente.


// Exercício 12: Remova a propriedade desconto do objeto Venda. Verifique se a propriedade
// foi removida com sucesso e exiba as propriedades restantes do objeto.

