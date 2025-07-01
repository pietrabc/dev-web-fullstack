// Classe vs Instância

class Carro {
    marca = 'Toyota';
    modelo = 'Corolla';
    ano = 2024;

    ligar() {
        console.log('Carro ligado');
    }

    desligar() {
        console.log('Carro desligado');
    }

    exibirInformacoes() {
        console.log(
            `O carro é de modelo: ${Carro.modelo}, do ano de ${Carro.ano}`
        );
    }
}