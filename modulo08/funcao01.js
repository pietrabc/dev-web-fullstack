// function nomeFuncao() { instrução } - sintaxe básica

// Mensagem para iniciar um cadastro

function enviarMensagem(){
    console.log('Para continuar você precisa informar o seu nome no cadastro');
}

//enviarMensagem();

// Cadastro de usuário

function cadastrar(nome, sobrenome) {
    console.log(`Olá, ${nome} ${sobrenome}, você foi cadastrado com sucesso`);
}

//cadastrar('Pietra', 'Bezerra');

// Operações matemáticas

function banco(deposito, saque) {
    let saldo = deposito - saque;
    return saldo; 
}

//console.log(banco(1000, 60));

//Função principal

function main() {
    enviarMensagem();
    cadastrar('Pietra', 'Bezerra');
    let saldo = banco(10000, 700);
    console.log(`o saldo atual da sua conta é de ${saldo} reais`);
}

main();