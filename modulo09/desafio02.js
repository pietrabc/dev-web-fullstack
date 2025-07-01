// Desafio: Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
// Exiba o resultado no console.
// Exemplo Entrada: // 2024-10-07 - UTC
// Exemplo Saída: // Data formatada no padrão brasileiro: 07/10/2024 - UTC 3

let data1 = '2024-10-07';
let data2 = '2023-08-22';
let data3 = '2024-01-13';

function formatarPadraoMetodoNumber(dataString) {
    //Dividir a string data
    let partesDaData = dataString.split('-');

    //Converter para Number
    let ano = parseInt(partesDaData[0]);
    let mes = parseInt(partesDaData[1]);
    let dia = parseInt(partesDaData[2]);

    let dataFormata = `${dia}/${mes}/${ano}`;
    console.log(dataFormata + ' Por métodos de number e string');
}

formatarPadraoMetodoNumber(data2)