// Exercício 1: Converta valores de texto em números
// Imagine que você tem valores em formato de texto, como "150.50" ou "200px". Seu objetivo é
// convertê-los para números reais.
// Exemplo de Entrada: // "150.50";
// // "200px";
// // "abc";
// Exemplo de Saída: // 150.50
// // 200
// // NaN
const valor1 = '150.50';
const valor2 = '200px';
const valor3 = 'abc';

console.log(Number.parseFloat(valor1));
console.log(Number.parseInt(valor2));
console.log(Number(valor3));

// Exercício 2: Somar valores numéricos de uma entrada de formulário
// Você recebe dois valores numéricos como string. Converta-os e some-os corretamente.
// Exemplo de Entrada: // "10" e "20.5";
// Exemplo de Saída: // 30.5
const numero1 = '10';
const numero2 = '20.5';

const soma = Number.parseFloat(numero1) + Number.parseFloat(numero2);
console.log(soma);


// Exercício 3: Arredonde valores financeiros
// Você tem um valor financeiro com várias casas decimais e deseja exibi-lo com apenas duas
// casas decimais.
// Exemplo de Entrada: // 1234.56789;
// Exemplo de Saída: // Valor formatado: 1234.57
const valorF = 1234.56789;
const valorFormatado = valorF.toFixed(2);
console.log(`Valor formatado: ${valorFormatado}`);

// Exercício 4: Ajustar a precisão de um número
// Você tem um número muito grande e precisa exibi-lo com uma precisão específica.
// Exemplo de Entrada: // 12345.6789;
// Exemplo de Saída: // Valor com precisão: 1.235e+4
const valorG = 12345.6789;
const valorPreciso =valorG.toPrecision(4);
console.log(`vALOR COM PRECISÃO: ${valorPreciso}`);

// Exercício 5: Verificar se a entrada é um número válido
// Você recebe uma entrada do usuário e precisa garantir que seja um número válido antes de
// realizar qualquer operação.
// Exemplo de Entrada: // "123abc";
// Exemplo de Saída: // "A entrada não é um número válido."
const entrada = "123abc";
const entradaValida = '123';

const entradaConvertida = Number(entrada);
const entradaValidaConvertida = Number(entradaValida);
console.log(entradaConvertida);
console.log(entradaValidaConvertida);



console.log(Number.isNaN(entradaConvertida));
console.log(Number.isNaN(entradaValidaConvertida));



// Exercício 6: Verificar se o número é finito
// Você quer garantir que um número não seja Infinity ou NaN antes de usá-lo em cálculos.
// Exemplo de Entrada: // 1 / 0;
// // NaN ou “abc”;
// Exemplo de Saída: // ""O número é infinito ou não é um número."
const numero = 1 / 0;
const notNumber = NaN;
const string = 'abc';