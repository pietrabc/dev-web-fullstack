// Requisito 13: Crie uma função que receba duas distâncias (distancia1 e distancia2) e retorne
// qual pessoa está mais próxima, indicando "Pessoa 1" se a primeira distância for menor,
// "Pessoa 2" se a segunda distância for menor, ou "Ambos estão a mesma distância" se as
// distâncias forem iguais.
// Função: calcularDistancia
// Exemplo Entrada: // calcularDistancia(10, 15);
// // calcularDistancia(20, 15);
// // calcularDistancia(30, 30);
// Exemplo Saída: // “Pessoa 1”
// // "Pessoa 2"
// "Ambos estão a mesma distância"

// distancia1 for menor => pessoa 1 ----  

function calcularDistancia( distancia1, distandcia2) {
    if(distancia1 < distandcia2) {
        return 'Pessoa 1'
    } else if (distancia1 > distandcia2) {
        return 'Pessoa 2'
    } else {
        return 'Ambos estão a mesma distância'
    }
}

console.log(calcularDistancia(10,15));
console.log(calcularDistancia(20,15));
console.log(calcularDistancia(30,30));

