const usuario = {
    nome: 'Pietra',
    idade: 23,
    time: 'Ceará'
};


const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Alvinegro!';

if(usuario.time === 'Ceará'){
    console.log(mensagemDeBoasVindas2)
}
if (usuario.time === 'Fortaleza'){
    console.log(mensagemDeBoasVindas1);
}



const mensagemDeEscolha = 'Clique no setor para qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Castelão!!!'

console.log(mensagemDeEscolha);
console.log(mensagemFinal);