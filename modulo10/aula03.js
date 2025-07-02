const usuario = {
    nome: 'Pietra',
    idade: 23,
    time: 'Nenhum'
};


const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Alvinegro!';
const mensagemDeBoasVindas3 = 'Bem vindo, torcedor Rubro-Negro!';
const mensagemDeBoasVindas4 = 'Bem vindo, amante do esporte!';

if(usuario.time === 'Ceará'){
    console.log(mensagemDeBoasVindas2)
} else if (usuario.time === 'Fortaleza') {
    console.log(mensagemDeBoasVindas1);
} else if(usuario.time === 'Flamengo') {
    console.log(mensagemDeBoasVindas3)
} else {
    console.log(mensagemDeBoasVindas4)
}



const mensagemDeEscolha = 'Clique no setor para qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Castelão!!!'

console.log(mensagemDeEscolha);
console.log(mensagemFinal);