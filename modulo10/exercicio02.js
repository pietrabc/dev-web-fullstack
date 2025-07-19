// Exercício 3: Determinação de Categoria de Cliente
// Escreva um programa categoriaCliente que determine a categoria de um cliente com base em sua
// pontuação de fidelidade, que será entre 0 e 100. Se a pontuação for maior ou igual a 85, o cliente é
// categorizado como "Cliente Premium". Se for maior ou igual a 50, é categorizado como "Cliente Regular".
// Caso contrário, é categorizado como "Cliente Comum".

function categoriaCliente() {
  const pontuacaoFidelidade = Math.floor(Math.random() * 101);
  console.log(`Sua pontuação de fidelidade é: ${pontuacaoFidelidade}`);

  if (pontuacaoFidelidade >= 85) {
    console.log('Cliente Premium');
  } else if (pontuacaoFidelidade >= 50) {
    console.log('Cliente Regular');
  } else console.log('Cliente Comum');
}

categoriaCliente()
