console.log('Olá impressionador');
console.error('Deu ruim');

function saudacao(nome) {
  return `Olá, ${nome}`;
}

console.log(saudacao('Ana'));
console.log(saudacao('Paulo'));
console.log(saudacao('André'));

const pessoa = {
  nome: 'Ana',
  saudacao: function () {
    return `Olá, ${pessoa.nome}`;
  },
};

console.log(pessoa.saudacao());
