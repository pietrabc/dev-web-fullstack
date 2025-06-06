// Métodos de Objetos part 2

const produto = {
  nome: 'Laptop',
  preco: 2500,
  disponibilidade: true,
};

Object.assign(produto, { emEstoque: 10, categoria: 'Eletrônicos' }); // adicionar novas propriedades
console.log(produto);

Object.defineProperty(produto, 'disponibilidade', { value: false }); // modificar o valor de uma propriedade existente
console.log(produto);

const origem = {
  nome: 'Carlos',
  idade: 30,
};

const origem2 = {
  profissao: 'Engenheiro',
  cidade: 'Sao Paulo',
};

const destino = {};
Object.assign(destino, origem, origem2);
console.log(destino);

Object.defineProperty(destino, 'salario', {  // Adicionar uma nova propriedade
     value: 2000,
     enumerable: true,
     writable: true,
     configurable: true,
    });
console.log(destino);

delete destino.cidade;
console.log(destino);
