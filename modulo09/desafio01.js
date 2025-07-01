// Desafio: Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
// Exiba o resultado no console.
// Exemplo Entrada: // 2024-10-07 - UTC
// Exemplo Saída: // Data formatada no padrão brasileiro: 07/10/2024 - UTC 3

function formatarPadraoBrasileiro(dataString) {
    let data = new Date(dataString + 'T00:00:00');
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();

    const dataFormata = `${dia}/${mes}/${ano}`;
    console.log('Essa é a data formatada:',dataFormata);
}

formatarPadraoBrasileiro('2024-10-07');