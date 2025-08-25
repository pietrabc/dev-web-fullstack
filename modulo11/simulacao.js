// Requisitos do Projeto de Simulação Financeira
// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Requisito 1: Simulação de Investimento
// ❖ Crie uma função que simule o rendimento de um investimento com base em um valor
// inicial, uma taxa mensal de rendimento e um período de meses.
// ❖ A função deve retornar o saldo final após o período especificado, com duas casas
// decimais.
// Função: simularInvestimento

const valorInicial = 1000; //Valor inicial investido
const taxaMensal = 1.5; // Taxa de rendimento mensal em %
const meses = 12; // Duração do investimento

function simularInvestimento(valorInicial, taxaMensal, meses) {
    let saldoFinal = valorInicial;

    for (let index = 1; index <= meses; index++) {
        saldoFinal += saldoFinal * (taxaMensal / 100)
    }

    return saldoFinal.toFixed(2);
}

//console.log(simularInvestimento(valorInicial, taxaMensal, meses)) // 1195.62

// Requisito 2: Gerenciamento de Despesas
// ❖ Crie uma função que receba um objeto representando as despesas mensais em
// diferentes categorias.
// ❖ A função deve calcular e retornar o total de despesas.
// Função: gerenciarDespesas



// Requisito 3: Obtenção do Mês Atual
// ❖ Crie uma função que retorne o nome do mês atual em formato string.
// ❖ A função deve utilizar um array de nomes dos meses para identificar o mês atual.
// Função: obterMesAtual

// Requisito 4: Geração de Relatório Financeiro
// ❖ Crie uma função que gere um relatório financeiro com base no investimento inicial, taxa
// de rendimento, duração do investimento, despesas mensais, meta de investimento e
// meta de orçamento.
// ❖ O relatório deve incluir:
// ■ O mês atual.
// ■ O saldo final do investimento.
// ■ O total de despesas.
// ■ Uma mensagem de economia ou excedente em relação ao orçamento.
// ■ Uma verificação se a meta de investimento foi atingida.
// ■ Um resumo das despesas por categoria.
// Função: gerarRelatorio

// Requisito 5: Estrutura de Dados para Despesas
// ❖ Crie um objeto para armazenar as despesas mensais, utilizando categorias como
// alimentação, transporte, aluguel e lazer.
// ❖ O objeto deve permitir fácil acesso e modificação dos valores das despesas.

// Requisito 6: Entradas e Configurações do Investimento
// ❖ Defina variáveis para armazenar o valor inicial do investimento, a taxa mensal de
// rendimento, a duração do investimento em meses, a meta de investimento e a meta de
// orçamento mensal.
// ❖ As variáveis devem ser configuráveis para permitir diferentes simulações financeiras.

// Requisito 7: Execução do Relatório
// ❖ Chame a função gerarRelatorio com os parâmetros adequados para gerar e exibir
// o relatório financeiro no console.
// ❖ A chamada deve utilizar as variáveis e objetos definidos anteriormente