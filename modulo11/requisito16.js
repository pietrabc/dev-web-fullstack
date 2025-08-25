// Exercício 16: Crie uma função que receba uma frase e codifique as vogais de acordo com a
// seguinte substituição: a → 1, e → 2, i → 3, o → 4, u → 5. Crie uma segunda função que
// decodifique a frase, revertendo as substituições.
// Funções: codificar e decodificar
// Exemplo Entrada: // const frase = "a casa e o sol";
// const resultado = codificar(frase);
// const frase2 = "1 c1s2 2 4 s4l";
// const resultado2 = decodificar(frase2);
// Exemplo Saída: // "1 c1s2 2 4 s4l"
// // "a casa e o sol"

const fraseCodificar = 'a casa e o Sol sem miudos';
const resultado = codificar(fraseCodificar);
const fraseDecodificar = '1 c1s1 2 4 s4l s2m m35d4s';
//const resultado2 = decodificar(fraseDecodificar);

function codificar(frase) {
  let resultado = frase;

  //resultado = resultado.replace('a','1');
  while (resultado.includes('a')) {
    resultado = resultado.replace('a', '1');
  }
  while (resultado.includes('e')) {
    resultado = resultado.replace('e', '2');
  }

  while (resultado.includes('i')) {
    resultado = resultado.replace('i', '3');
  }

  while (resultado.includes('o')) {
    resultado = resultado.replace('o', '4');
  }

  while (resultado.includes('u')) {
    resultado = resultado.replace('u', '5');
  }

  return resultado;
}

function decodificar(frase) {
  let resultado = frase;

  while (resultado.includes('1')) {
    resultado = resultado.replace('1', 'a');
  }

  while (resultado.includes('2')) {
    resultado = resultado.replace('2', 'e');
  }

  while (resultado.includes('3')) {
    resultado = resultado.replace('3', 'i');
  }

  while (resultado.includes('4')) {
    resultado = resultado.replace('4', 'o');
  }

  while (resultado.includes('5')) {
    resultado = resultado.replace('5', 'u');
  }

  return resultado;
}

const fraseParaDecodificar = codificar(fraseCodificar);

//console.log(codificar(fraseCodificar))
//console.log(decodificar(fraseDecodificar));

// Expressões regulares - Regex [a-z] [A-Z]

// Refaturação 25 linhas código - 10 linhas

function codificarRegex(frase) {
  let resultado = frase
    .replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');

  return resultado;
}

function decodificarRegex(frase) {
  let resultado = frase
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');

  return resultado;
}

console.log(decodificarRegex(fraseDecodificar));
