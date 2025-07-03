// Lista de funcionários de um zoológico
let funcionarios = [
  {
    nome: 'João',
    categoria: 'Veterinário',
    salario: 3500,
    disponivel: true,
  },
  {
    nome: 'Maria',
    categoria: 'Administrativo',
    salario: 1800,
    disponivel: true,
  },
  {
    nome: 'Ricardo',
    categoria: 'Tratador',
    salario: 2500,
    disponivel: false,
  },
  {
    nome: 'Alex',
    categoria: 'Tratador',
    salario: 2500,
    disponivel: false,
  },
  {
    nome: 'Luciano',
    categoria: 'Veterinário',
    salario: 3500,
    disponivel: true,
  },
];

// Listar funcionários por categoria
function listarFuncionariosCategoria(categoria) {
  console.log(`Funcionários na categoria ${categoria}`);
  for (let index = 0; index < funcionarios.length; index++) {
    if (funcionarios[index].categoria === categoria) {
      console.log(funcionarios[index].nome);
    }
  }
}

listarFuncionariosCategoria('Veterinário');

// Função calcular o total gasto em salário
function calcularSalarios() {
    let totalSalarios = 0;
    for (let i = 0; i < funcionarios.length; i++) {
        totalSalarios += funcionarios[i].salario;
    }
    return totalSalarios;
}

console.log(calcularSalarios());

// Função para contar os funcionários que estão disponíveis

function funcionariosDisponiveis() {
    let contador = 0;
    for (let index = 0; index < funcionarios.length; index++) {
        if (funcionarios[index].disponivel) {
            contador++;
        }
    }
    return contador;
}

console.log(funcionariosDisponiveis());