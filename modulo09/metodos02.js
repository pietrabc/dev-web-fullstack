// String - Sequência de caracteres
let string = 'Olá, Mundo!';

console.log(string.toUpperCase()); // letras maiúsculas
console.log(string.toLowerCase());

// slice(start, end)
//console.log(string[0]);

console.log(string.slice(0, 5));
console.log(string.slice(-6)); // de trás paara frente

//substring(start, end)
console.log(string.substring(0, 5));
//console.log(string.substring(-6)); // não aceita indices negativos - converte para 0 = substring(0);
console.log(string.substring(7, 3)); // inverte os valores (3, 7);
