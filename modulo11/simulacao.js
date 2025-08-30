// Requisitos do Projeto de Simulação Financeira
// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens.

// Requisito 1: Simulação de Investimento

function simularInvestimento(valorInicial, taxaMensal, meses) {
    let saldoFinal = valorInicial;

    for (let index = 1; index <= meses; index++) {
        saldoFinal += saldoFinal * (taxaMensal / 100)
    }

    return saldoFinal.toFixed(2);
}

//console.log(simularInvestimento(valorInicial, taxaMensal, meses)) // 1195.62

// Requisito 2: Gerenciamento de Despesas

function gerenciarDespesas(despesas) {
    let totalDespesas = 0;
    for(let categoria in despesas) {
        totalDespesas += despesas[categoria]; // Somar o valor de cada categoria
    }
    return totalDespesas;
}

//console.log(gerenciarDespesas(despesas)); // 2050

// Requisito 3: Obtenção do Mês Atual

function obterMesAtual() {
    const meses = ['Janeiro', 
        'Fevereiro', 
        'Março', 
        'Abril', 
        'Maio', 
        'Junho', 
        'Julho', 
        'Agosto', 
        'Setembro', 
        'Outubro', 
        'Novembro', 
        'Dezembro'];

    const dataAtual = new Date(); // Criar uma instância e podemos utilizar os métodos desse objeto
    //console.log(dataAtual.getMonth());
    return meses[dataAtual.getMonth()];
}

// Requisito 4: Geração de Relatório Financeiro

function gerarRelatorio(valorInicial, taxa, meses, despesas, metaInvestimento, metaOrcamento) {
    
    const saldoInvestimento = simularInvestimento(valorInicial, taxa, meses);
    const totalDespesas = gerenciarDespesas(despesas);
    const mesAtual = obterMesAtual();
    
    console.log('=== Relatório Financeiro ===');
    console.log(`Mês: ${mesAtual}`);
    console.log(`Saldo final do investimento: R$ ${saldoInvestimento}`);
    console.log(`Total de despesas: R$ ${totalDespesas}`);

    const economia = metaOrcamento - totalDespesas;
    if (economia > 0) {
        console.log('Parabéns você economizou R$' + economia);
    } else {
        console.log(`Você excedeu seu orçamento em R$ ${Math.abs(economia)}`);
    }

    if(saldoInvestimento >= metaInvestimento) {
        console.log('Meta de investimento atingida')
    } else {
        console.log('Você não atingiu a meta de investimento');
    }

    console.log('=== Resumo das Despesas ===');
    for( const categoria in despesas) {
        console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: R$ ${despesas[categoria]}`)
    }
}

// Requisito 5: Estrutura de Dados para Despesas

const despesas = {
    condominio: 800,
    escola: 500,
    academia: 150,
    agua: 60,
    luz: 120,
    lazer: 300,
};

// Requisito 6: Entradas e Configurações do Investimento

const valorInicial = 1000; //Valor inicial investido
const taxaMensal = 1.3; // Taxa de rendimento mensal em %
const meses = 12; // Duração do investimento
const metaInvestimento = 2000;
const metaOrcamento = 1500;

// Requisito 7: Execução do Relatório
gerarRelatorio(valorInicial, taxaMensal, meses, despesas, metaInvestimento,metaOrcamento);