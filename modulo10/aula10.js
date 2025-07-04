// DO WHILE
let numero = 1;

do {
    console.log('Número' + numero);
    numero++;
} while (numero <= 5);

console.log('Contagem do.. while foi concluída!' );

let funcionariosParaRegistrar = 6; // total

do {
    console.log('Registrando a entrada do funcionário ' + funcionariosParaRegistrar);
    funcionariosParaRegistrar--; // -1
} while (funcionariosParaRegistrar > 0);

console.log('Nenhum funcionário restante para registrar');