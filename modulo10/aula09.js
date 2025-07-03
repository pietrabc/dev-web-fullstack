// Simulador de Aplicativo de corrida
let nome = 'João';
let partida = 'Avenida Paulista';
let destino = 'Parque Ibirapuera';

function registrar(nome) {
    while(true) {
        if (nome === '') {
            console.log('Preencha com o seu nome');
            break;
        } else if (typeof nome !== 'string') {
            console.log('Nome inválido, preencha novamete!');
            break;
        } else {
            console.log(`Usuário ${nome} registrado com sucesso!`);
            break;
        }
    }
}

registrar(nome);

function selecionar(partida, destino) {
    console.log('Selecionar o local de partida e destino')

    while(partida !== destino) {
        if (partida === '' || typeof partida !== 'string') {
            console.log('Local de partida inválido. Digite o local correto!')
            break;
        } else if (destino === '' || typeof destino !== 'string') {
            console.log('Destino inválido. Digite o destino correto!');
            break;
        } else {
            console.log('Corrida confirmada! Aguarde o motorista.');
            break;
        }
    }
}

selecionar(partida, destino);