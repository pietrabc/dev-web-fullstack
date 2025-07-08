// Exemplo de objeto simples
const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2024,
  peças: {
    portas: 4,
    pneus: 'Sistema Abs',
    airbag: true,
  },
};

// Função recursiva para imprimir propriedades de um objeto simples
function imprimirObjeto(objeto) {
  // Obter as chaves do objeto
  const keys = Object.keys(objeto); // lista [marca, modelo, ano] - [] = 0

  // Caso base - se o objeto estiver vazio
  if (keys.length === 0) {
    return; // interromper a função
  }

  // Iteração sobre as chaves do objeto
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = objeto[key];

    // Verificação se o valor é um objeto
    if (typeof value == 'object') {
      // se for objeto, chama recursivamente a função
      imprimirObjeto(value);
    } else {
      // se não for objeto, imprime chave e seu valor
      console.log(`${key}:${value}`);
    }
  }
}

// Chamada da função
imprimirObjeto(carro);
