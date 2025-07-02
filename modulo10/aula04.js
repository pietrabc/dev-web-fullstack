const usuario = {
  nome: 'Pietra',
  idade: 23 , 
  time: 'Bahia',
};

const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Alvinegro!';
const mensagemDeBoasVindas3 = 'Bem vindo, torcedor Rubro-Negro!';
const mensagemDeBoasVindas4 = 'Bem vindo, torcedor Vascaíno!';
const mensagemDeBoasVindas5 = 'Bem vindo, torcedor Santista!';
const mensagemDeBoasVindas6 = 'Bem vindo, torcedor do Náutico!';
const mensagemDeBoasVindas7 = 'Bem vindo, torcedor do Galo!';
const mensagemDeBoasVindas8 = 'Bem vindo, torcedor do Cruzeiro!';
const mensagemDeBoasVindas9 = 'Bem vindo, torcedor Corintiano!';

const mensagemDeBoasVindasGeral = 'Bem vindo, amante do esporte!';

switch (usuario.time) {
    case 'Fortaleza' :
        console.log(mensagemDeBoasVindas1);
        break;    
    case 'Ceará' :
        console.log(mensagemDeBoasVindas2);
        break;    
    case 'Flamengo' :
        console.log(mensagemDeBoasVindas3);
        break;    
    case 'Vasco' :
        console.log(mensagemDeBoasVindas4);
        break;    
    case 'Santos' :
        console.log(mensagemDeBoasVindas5);
        break;    
    case 'Náutico' :
        console.log(mensagemDeBoasVindas6);
        break;    
    case 'Atlético Mineiro' :
        console.log(mensagemDeBoasVindas7);
        break;    
    case 'Cruzeiro' :
        console.log(mensagemDeBoasVindas8);
        break;    
    case 'Corinthias' :
        console.log(mensagemDeBoasVindas9);
        break;  
    default:
        console.log(mensagemDeBoasVindasGeral);        
}

const mensagemDeEscolha =
  'Clique no setor para qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Castelão!!!';

console.log(mensagemDeEscolha);
console.log(mensagemFinal);
