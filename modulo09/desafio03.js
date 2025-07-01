// Formatar Padrão Date
let data1 = '2024-10-07';
let data2 = '2023-08-22';
let data3 = '2024-01-13';

function formatarPadraoDate(dataString) {
  let data = new Date(dataString + 'T00:00:00');

  let dataFormatada = data.toLocaleDateString('pt-BR');
  console.log('Data formatada no padrão Brasileiro:' + dataFormatada);
}
formatarPadraoDate(data1);
formatarPadraoDate(data2);
formatarPadraoDate(data3);
