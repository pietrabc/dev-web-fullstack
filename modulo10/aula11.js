// Simulador de Reprodução de Filme
let reproduzido = true;
let entrada = '';

function reproduzirFilme() {
    console.log('Apertou o play');
}

function pausarFilme() {
    console.log('Filme pausado');
} 

function sairFilme() {
    console.log('Saindo do filme');
} 

function opcoesConfiguracao(entrada) {
    do {
        console.log('Opções de configuração: 1 - Pausar e 2 - Sair do filme');
        console.log(`opção: ${entrada}`);

        if (entrada === 1) {
            pausarFilme();
            reproduzido = false;
        } else if (entrada === 2) {
            sairFilme();
            reproduzido = false;
        } else {
            console.log( 'Opção inválida. Escolha 1 para pausar e 2 para sair do filme');
            break;
        }
    } while(reproduzido);
}

//Simular
reproduzirFilme();
opcoesConfiguracao(entrada);