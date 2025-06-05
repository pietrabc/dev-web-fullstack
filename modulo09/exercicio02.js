// Exercício 1: Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final,
// remova o primeiro item e exiba o carrinho atualizado.

let produto = ['Produto A', 'Produto B'];
produto.push('Produto C');
produto.shift();
console.log(produto);

// Exercício 2: Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final
// e una com a nova lista ['Produto A', 'Produto B']. Exiba a lista final de produtos
// disponíveis.

let outroProduto = ['Produto X', 'Produto y'];
outroProduto.push('Produto Z');
let produto2 = ['Produto A', 'Produto B'];
let novoArray = produto2.concat(outroProduto);
console.log(novoArray);

// Exercício 3: Dado o array ['Caderno', 'Lápis', 'Estojo'], verifique se 'Lápis' e
// 'Agenda' estão presentes no estoque.
// Exemplo de Saída: // true
// // false

let material = ['Caderno', 'Lápis', 'Estojo'];
console.log(material.includes('Lápis'));
console.log(material.includes('Agenda'));

// Exercício 4: Dado o array [2, 5, 8, 1], verifique se pelo menos um dos números é maior
// que 7.
// Exemplo de Saída: // true

let numeros = [2, 5, 8, 1];

let resultadoSome = numeros.some((numero) => numero > 7);
console.log(resultadoSome);

//Exercício 5: Dado o array [4, 6, 8, 2], verifique se todos os números são maiores que 3.
//Exemplo de Saída: // false

let number = [4, 6, 8, 2];

let resultadoEvery = number.every((numeros) => numeros > 3);
console.log(resultadoEvery);