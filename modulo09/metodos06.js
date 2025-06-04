let letras = ['d', 'g', 'a', 'h', 'b', 'f', 'c', 'e'];
let numeros = [1, 6, 5, 4, 10, 8, 2, 19, 3];

// .sort() - Ordenando os elementos

letras.sort();
console.log(letras);

numeros.sort(); // Vai identificar as casas numéricas, não colocar em ordem.
console.log(numeros);

// reverse(); - Reverter os elementos
letras.reverse();
console.log(letras);

numeros.reverse();
console.log(numeros);

// .concat()

let mesclaArray = letras.concat(numeros);
console.log(mesclaArray);

