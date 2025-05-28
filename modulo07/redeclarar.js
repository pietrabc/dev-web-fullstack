// Redeclarações
let nome = "Pietra";
const nomeProfessor = "Daniel";

var nomeAluno = "Olá";
console.log(nomeAluno);
var nomeAluno = "Bem Vindo!";
console.log(nomeAluno);
// Reatribuições - Mutabilidade

nome = "Lira";
console.log(nome);

nomeAluno = "Bezerra";
console.log(nomeAluno);
// O tipo const gera um erro

// Hoisting
var segundaMensagem; //não atribui nenhum valor
console.log(segundaMensagem);
var segundaMensagem = "Utilizando hoisting";
console.log(segundaMensagem);

//console.log(terceiraMensagem);
//const terceiraMensagem = "Teste"; // Tanto Let e o Const - Não fazem hoisting

// Visibilidade
{
    console.log("Isso é um bloco");
    let idade = 23;
    const real = 50;
    console.log(idade);
    console.log(real);
} // Bloco de instrução
//function() {instruções - tarefas específicas} // Bloco de função

function executar() {
    // instruções dentro da função
    console.log("Dentro da função");
    var numero = 10;
    console.log(numero);
}

executar ()