// Exemplo Produtos

 let produtos = ['Camiseta', 'Calça', 'Boné', 'Meias']; // 0, 1, 2, 3

 for (let index = 0; ; index++) {
    if (index >= produtos.length) {
        break;
    }
     console.log('Produto ' + (index + 1) + ': ' + produtos[index]);
 }

// Loop for sem especificar todos os argumentos

// let i = 1;

// for (; i <= 4; ) {
//     console.log('Loop infinito');
//     i++;
// }

// console.log('Sai do loop infinito')