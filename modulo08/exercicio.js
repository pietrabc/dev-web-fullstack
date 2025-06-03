// 1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao
// término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do
// cálculo).

// function mediaNota(nota1, nota2, nota3) {
//     let media = (nota1 + nota2 + nota3) / 3;
//   console.log('A média desse aluno é:' + media);
// } mediaNota(5, 9, 8.5);

// 2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está
// de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3
// primeiras provas + a nota da prova final. O cálculo deve ser o seguinte: média_final = (média_antes_da_pf + pf)/2

// Você deve usar a função do exercício 1 para calcular a média final. Faça as modificações que julgar
// necessário.
// Ao término do processo, devemos ter a mensagem "a média final desse aluno é x" (sendo x o
// resultado do cálculo)

// function notaAluno(pf) {
//     function mediaNota(nota1, nota2, nota3) {
//     let media = (nota1 + nota2 + nota3) / 3;
//     let notaFinal = (media + pf) / 2
//   console.log('A média desse aluno é:' + media);
//   console.log('A nota final é:' + notaFinal);
// }
// }
// mediaNota(5, 9, 8.5);
// notaAluno (8);

function notaAluno(pf) {
  function mediaNota(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    let notaFinal = (media + pf) / 2;
    console.log('A média desse aluno é:' + media);
    console.log('A nota final é:' + notaFinal);
  }
  mediaNota(5, 6, 7);
  
}
notaAluno(8);
// 3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na
// tela o texto:
// a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)
// Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32

function temperatura(celsius) {
  let faren = (celsius * 9) / 5 + 32;
  console.log('A temperatura correspondente em Farenheit é de:' + faren);
}

temperatura(26);

// 4 - Quando estava passeando em Nova York, Bruno se surpreendeu com uma realidade diferente da
// que conhecia. Ao tentar pagar um produto, ele percebeu que o valor cobrado era sempre um pouco
// maior do que o que estava presente na etiqueta da prateleira onde o achou. Isso acontece porque a
// etiqueta não contém o valor do imposto pago sobre o produto, que é calculado no caixa. Esse imposto
// é de 8,875% em cima do valor do produto. Faça uma função que recebe o valor do produto presente na
// etiqueta e registre na tela a frase:
// O valor a ser pago é x (sendo x o resultado do acréscimo dos impostos sobre o valor inicial

function produto(valor) {
    let imposto = valor * (1 + 8.875/100);
    console.log('O valor total a ser pago é: R$' + imposto);
}
produto(30);