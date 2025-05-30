// Objeto

let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2024,
    cor: 'Preto',
    airbag: true,
    itens: ['abs', '4 portas', 'step'],
}

// Acessar os valores das propriedades (chaves)

console.log(carro.marca);
// console.log(carro.ano);
// console.log(carro.cor);
// console.log(carro.airbag);
// console.log(carro.itens);

console.log(carro['modelo']);

carro.cor = 'Azul';
console.log(carro);

carro.kmRodados = 15000;
console.log(carro);