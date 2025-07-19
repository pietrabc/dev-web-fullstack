// Exercício 7: Prioridade no Trânsito
// Crie uma função chamada coresDoSemaforo que recebe uma cor de semáforo como argumento (por
// exemplo, "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando se é seguro passar ou se é
// necessário parar.

function coresDoSemaforo(corSemaforo) {
  let mensagem;

  switch (corSemaforo) {
    case 'Vermelho':
      mensagem = 'Pare o veículo.';
      break;
    case 'Amarelo':
      mensagem = 'Reduza a velocidade.';
      break;
    case 'Verde':
      mensagem = 'Siga em frente!';
      break;
    default:
      mensagem = 'Cor desconhecida. Siga com cuidado!';
  }
  return mensagem;
}

const cor = 'Verme';
console.log(coresDoSemaforo(cor));

// Exercício 8: Verificação de Placa de Veículo
// Crie uma função verificarPlaca que recebe o último dígito da placa de um veículo como argumento (um
// número de 0 a 9) e retorna uma mensagem indicando o dia de rodízio em São Paulo, com base no último
// dígito da placa.

function verificarPlaca(ultimoDigitoPlaca) {
    let diaRodizio;
    switch (ultimoDigitoPlaca) {
        case 1:
        case 2:
            diaRodizio = 'Segunda-Feira';
            break;
        case 3:
        case 4:
            diaRodizio = 'Terça-Feira';
            break;
        case 5:
        case 6:
            diaRodizio = 'Quarta-Feira';
            break;
        case 7:
        case 8:
            diaRodizio = 'Quinta-Feira';
            break;
        case 9:
        case 0:
            diaRodizio = 'Sexta-Feira';
            break;        
        default:
            diaRodizio = 'Placa inválida ou Fim de Semana não tem rodízio';    
    }
    return `O dia de rodízio é na ${diaRodizio}`;
}

const finalPlaca = 6;
console.log(verificarPlaca(finalPlaca));