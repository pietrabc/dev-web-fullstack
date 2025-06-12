// Métodos Nativos Number - Parte 02
let flutuanteString = '32.7654';
let inteiroFlutuante = '42';

console.log(typeof flutuanteString);

// Converter o valor ( geralmente string) para um número

console.log(typeof Number.parseFloat(flutuanteString));
console.log(Number.parseFloat(inteiroFlutuante));

// Converter um inteiro para uma string - base numérica
let numero = 42; // base decimal
console.log(numero.toString()); // base decimal
console.log(numero.toString(10)); // base decimal
console.log(numero.toString(2)); // base binária
console.log(numero.toString(8)); // base octal
// 2 - 36

// Converter uma string para um número inteiro, considerando a base numérica(opcional)
console.log(Number.parseInt(inteiroFlutuante));
console.log(Number.parseInt(flutuanteString));

console.log(Number.parseFloat(flutuanteString).toFixed(2));