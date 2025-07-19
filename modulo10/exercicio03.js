// Exercício 5: Verificação de Velocidade
// Crie uma função chamada verificarVelocidade que recebe a velocidade de um veículo como argumento e
// retorna true se o veículo estiver dentro do limite de velocidade (limite igual ou inferior a 80 km/h) e false caso
// exercicios.md 2023-09-22
// 2 / 2
// contrário, utilizando o operador ternário.

function verificarVelocidade(velocidade) {
  const dentroDoLimite = velocidade <= 80 ? true : false;
  return dentroDoLimite;
}

const velocidadeExemplo = 95;
const dentroDoLimite = verificarVelocidade(velocidadeExemplo);
console.log(`Dentro do limite de velocidade? ${dentroDoLimite}`);

// Exercício 6: Semáforo de Trânsito
// Crie uma função mensagemSemaforo que recebe uma cor de semáforo como argumento (por exemplo,
// "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando a ação a ser tomada com base na cor
// do semáforo. Utilize o operador ternário para determinar a mensagem.
// SWITCH / CASE:

function mensagemSemaforo(corSemaforo) {
    const mensagem = corSemaforo === 'Vermelho' ? 'Pare o veículo' :
     corSemaforo === 'Amarelo' ? 'Reduza a velocidade' : 
     corSemaforo === 'Verde' ? 'Siga em frente' :
     'Cor do semáforo desconhecida. Siga com atenção.';

return mensagem;     
}

const corSemaforo = 'Verme';
const mensagem = mensagemSemaforo(corSemaforo);
console.log(mensagem);