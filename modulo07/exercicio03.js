// Exercício 1: Manipulação de Array - parte 1
// a. Crie um array chamado produtos contendo três nomes de produtos.
// b. Acesse e imprima o segundo produto.
// c. Modifique o terceiro produto para "Notebook" e imprima o array atualizado.

let produtos = ['Monitor', 'Gabinete', 'Teclado'];
console.log(produtos);

produtos[2] = 'Notebook';
console.log(produtos);

// Exercício 2: Manipulação de Array - parte 2
// a. Crie um array chamado clientes contendo três nomes de clientes.
// b. Adicione um quarto cliente ao array.
// c. Remova o último cliente e imprima o array atualizado.

let clientes = ['Pietra', 'Anderson', 'Kelly'];

clientes[3] = 'Carlos';
console.log(clientes);

delete clientes[2];
console.log(clientes);

// Exercício 3: Manipulação de Objetos - parte 1
// a. Crie um objeto chamado produto com as propriedades nome, preco e quantidade.
// b. Acesse e imprima o nome do produto.
// c. Modifique o preço do produto e imprima o objeto atualizado.

let product = {
  nome: 'Camisa',
  preco: 50,
  quantidade: 4,
};
console.log(product.nome);
product.preco = 72;
console.log(product);

// Exercício 4: Manipulação de Objetos - parte 2
// a. Crie um objeto chamado venda com as propriedades cliente, produto e valor.
// b. Adicione a propriedade data ao objeto.
// c. Remova a propriedade produto e imprima o objeto atualizado.

let venda = {
  cliente: 'Marcos',
  produto: 'Boné',
  valor: 30,
};

venda.data = '20/01';
console.log(venda);

delete venda.produto;
console.log(venda);


// Exercício 5: Manipulação dos Tipos Referências
// a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
// b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
// c. Crie um objeto funcionario e atribua seus valores para um novo objeto
// novoFuncionario.
// d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi
// alterado.