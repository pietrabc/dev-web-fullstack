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
  } else {console.log('Cliente Comum');}
}

categoriaCliente();

// Exercício 4: Classificação de Desempenho de Vendas
// Você está gerenciando uma equipe de vendedores e deseja avaliar o desempenho de cada vendedor com
// base em suas vendas mensais em relação a uma meta estabelecida. Escreva um programa
// desempenhoIndividualDeVendas que determine a categoria de desempenho de um vendedor com base no
// percentual alcançado em relação à meta. 
// As categorias incluem 
// "Excelente Desempenho" (para vendedores
// que alcançaram ou excederam a meta), 
// "Muito Bom Desempenho" (para vendedores com vendas entre 90% e
// 99% da meta), 
// "Bom Desempenho" (para vendedores com vendas entre 80% e 89% da meta), 
// "Desempenho Satisfatório" (para vendedores com vendas entre 61% e 79% da meta) e 
// "Desempenho Insatisfatório" (para vendedores com vendas abaixo de 60% da meta). 
// Execute o código e informe a categoria de desempenho do vendedor com base nas vendas mensais e na meta de vendas estabelecida.
// OPERADOR TERNÁRIO:

function desempenhoIndividualDeVendas(vendasMensais, metaDeVendas) {
    const percentualAlcancado = (vendasMensais / metaDeVendas) * 100;
    
    if (percentualAlcancado >= 100) {
        return 'Excelente Desempenho;'
    } else if (percentualAlcancado >= 90 && percentualAlcancado < 100) {
        return 'Muito Bom Desempenho';
    } else if (percentualAlcancado >= 80 && percentualAlcancado < 90) {
        return 'Bom Desempenho';
    } else if (percentualAlcancado >= 61 && percentualAlcancado < 80) {
        return 'Desempenho Satisfatório'
    } else {
        return 'Desempenho Insatisfatório'
    }
}

const vendasMensais = 12000;
const metaDeVendas = 10000;

const categoriaDesempenho = desempenhoIndividualDeVendas(vendasMensais, metaDeVendas);
console.log(`Categoria de Desempenho: ${categoriaDesempenho}`)
