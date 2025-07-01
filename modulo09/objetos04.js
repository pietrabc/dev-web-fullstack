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

const classeCarro = new Carro(); // criar - instancia
console.log(classeCarro.modelo
);

// Objeto Global Date
console.log(Math);
console.log(new Date()); // CLASSE DO JAVASCRIPT

const dataAtual = new Date(); // criando uma instância  do objeto/classe DATE
console.log(dataAtual);