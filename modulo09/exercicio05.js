// Exercício 1: Você precisa criar uma função que receba um número decimal e o arredonde de
// três formas diferentes: para baixo, para cima e para o valor inteiro mais próximo. Mostre o
// resultado de cada arredondamento no console.
// Exemplo Entrada: // 7.89
// Exemplo Saída: // Arredondado para baixo: 7
// Arredondado para cima: 8
// Arredondado para o valor mais próximo: 8

let num = 7.89;

function arredondarNumero(numero) {
  //let baixo = Math.floor(numero); - Essas duas estão corretas, mas irei escrever como a professora colocou
  //let cima = Math.ceil(numero);
  let baixo = Number.parseInt(numero);
  let cima = Number(numero.toFixed());
  let arredondarProximo = Math.round(numero);

  console.log(`Arredondado para baixo : ${baixo}`);
  console.log(`Arredondado para cima : ${cima}`);
  console.log(`Arredondado para o valor mais próximo : ${arredondarProximo}`);
}

arredondarNumero(num);

// Exercício 2: Crie uma função que receba uma lista de números e retorne o valor máximo e o
// valor mínimo dessa lista.
// Exemplo Entrada: // 10, 5, 20, 40, 1, 7
// Exemplo Saída: // Valor mínimo: 1
// Valor máximo: 40

let lista = [10, 5, 20, 40, 1, 7];

function valoresLista(valor) {
  let maximo = Math.max(...valor);
  let minimo = Math.min(...valor);

  console.log(`O valor máximo é de: ${maximo}`);
  console.log(`O valor mínimo é de: ${minimo}`);
}

valoresLista(lista);

// Exercício 3: Você deve criar uma função que gere três tipos de números aleatórios: um entre 0
// e 1, outro entre 0 e 100, e um número inteiro aleatório entre dois valores específicos. Exiba os
// resultados no console.
// Exemplo Entrada: // 50, 100
// Exemplo Saída: // Aleatório entre 0 e 1: 0.8629821531529918
// Aleatório entre 0 e 100: 42.48780566605361
// Aleatório entre 50 e 100: 63.70589822740784

function gerarNumeroAleatorio(min, max) {
  let zeroAum = Number(Math.random().toFixed(2));
  let zeroAcem = Math.random() * 100;
  let aleatorioMaxMin = Math.random() * (max - min) + min;

  console.log(zeroAum);
  console.log(zeroAcem);
  console.log(`Aleatório entre ${min} e ${max}: ${aleatorioMaxMin}`);
}

gerarNumeroAleatorio(50, 100);

// Exercício 4: Crie uma função que receba duas datas e calcule a diferença entre elas em dias.
// Exiba o resultado no console.
// Exemplo Entrada: // 2024-01-01, 2024-10-07
// Exemplo Saída: // Diferença em dias entre 2024-01-01 e 2024-10-07: 280

function calcularDiferencaEmDias(dataInicial, dataFinal) {
  let diferencaMilissegundos = new Date(dataFinal) - new Date(dataInicial);
  let diferencaEmDias = diferencaMilissegundos / (1000 * 60 * 60 * 24); // milissegundos 1000 = 1 segundo => 60 converte segundos em minutos 60seg= 1min => 60 converte para minutos 60min = 1hora => 24h = 1dia.
  console.log(diferencaMilissegundos);
  console.log(`A diferença entre as datas é: ${diferencaEmDias}`);
}

calcularDiferencaEmDias('2025-07-01', '2025-09-09')

// Exercício 5: Crie uma função que receba uma data e extraia o ano, mês e dia dessa data.
// Exiba as informações no console.
// Exemplo Entrada: // 2024-10-07
// Exemplo Saída: // Ano: 2024, Mês: 10, Dia: 6

function extrairPartesDatas(dataString) {
    let data = new Date(dataString);
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();

    console.log(`Ano: ${ano}, Mês: ${mes}, Dia: ${dia}`);
}
//extrairPartesDatas('2024-10-07')
extrairPartesDatas('2024-10-07T00:00:00')

// Exercício 6: Crie uma função que receba a data de nascimento de uma pessoa e calcule sua
// idade com base na data atual. Exiba a idade no console.
// Exemplo Entrada: // 1990-05-15
// Exemplo Saída: // Idade: 34
let dataNascimento = '2001-09-09';

function calcularIdade(dataNascimento) {
    let nascimento = new Date(dataNascimento);
    let hoje = new Date(); // data atual

    let idade = hoje.getFullYear() - nascimento.getFullYear(); // 2024 - 1997 = 28

    let aniversarioAtual = new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate());

    let diferencaDias = (hoje - aniversarioAtual) / (1000 * 60 * 60 * 24);

    let ajuste = (diferencaDias < 0) * 1;

    idade = idade - ajuste;
    console.log('Minha idade é:', idade);
}

calcularIdade(dataNascimento);