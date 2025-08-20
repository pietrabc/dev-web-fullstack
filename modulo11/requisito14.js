// Requisito 14: Crie uma função que receba um array de despesas e retorne um novo array
// contendo "Alto Gasto" para despesas maiores que 100 e "Gasto Controlado" para despesas
// iguais ou menores que 100.
// Função: controleDespesas
// Exemplo Entrada: // const despesas = [150, 80, 200, 60, 120];
// const resultado = controleDespesas(despesas);
// Exemplo Saída: // ["Alto Gasto", "Gasto Controlado", "Alto Gasto", "Gasto Controlado", "Alto
// Gasto"]

const despesas = [150, 80, 200, 60, 120];

function controleDespesas(despesas) {
    const resultado = [];

    for(let despesa of despesas) {
        if (despesa > 100) {
            resultado.push('Alto Gasto')
        } else {
            resultado.push('Gasto Controlado');
        }
    }
}