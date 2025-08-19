// Requisito 2: Crie uma função que receba um array de nomes e retorne esse array ordenado
// em ordem alfabética. Função: ordenarNomes
// Exemplo Entrada: // ordenarNomes(['Ana', 'Elias', 'Carlos', 'Beatriz']);
// Exemplo Saída: // ['Ana', 'Beatriz', 'Carlos', ‘Elias’]

function ordenarNomes(listaNomes) {
    return listaNomes.sort();
}

let nomes = ['Ana', 'Elisa', 'Amanda', 'Gabriel','Zeus', 'Beatriz', 'Pietra'];
console.log(ordenarNomes(nomes))