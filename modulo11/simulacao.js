// Requisitos do Projeto de Simulação Financeira
// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Requisito 1: Simulação de Investimento

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

const despesas = {
    alimentacao: 500,
    transporte: 150,
    aluguel: 1200,
    lazer: 200,
};

function gerenciarDespesas(despesas) {
    let totalDespesas = 0;
    for(let categoria in despesas) {
        totalDespesas += despesas[categoria]; // Somar o valor de cada categoria
    }
    return totalDespesas;
}

//console.log(gerenciarDespesas(despesas)); // 2050

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