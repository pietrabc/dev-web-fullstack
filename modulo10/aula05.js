const usuario = {
  nome: 'Pietra',
  idade: 23,
  time: 'a',
};

const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Alvinegro!';
const mensagemDeBoasVindas3 = 'Bem vindo, torcedor do Vasco!';
const mensagemDeBoasVindas4 = 'Bem vindo, torcedor do Bahia!';
const mensagemDeBoasVindasGeral = 'Bem vindo, amante do esporte!';

usuario.time === 'Fortaleza' && usuario.idade >= 18
  ? console.log(mensagemDeBoasVindas1)
  : usuario.time === 'Ceará' && usuario.idade >= 18
  ? console.log(mensagemDeBoasVindas2)
  : usuario.idade >= 18
  ? console.log(mensagemDeBoasVindasGeral)
  : console.log('Não vendemos ingresso para menores de idade');

const mensagemDeEscolha =
  'Clique no setor para qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Castelão!!!';

console.log(mensagemDeEscolha);
console.log(mensagemFinal);
