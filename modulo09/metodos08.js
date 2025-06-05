let frutas = ['maçã', 'melão', 'manga'];

console.log(frutas.includes('manga'));
console.log(frutas.includes(50));

// every() - todos os elementos precisam possuir
// .some() - algum elemento precisa possuir

console.log(
  frutas.every(function (fruta) {
    return fruta.includes('m');
  })
);

console.log(
  frutas.some(function (fruta) {
    return fruta.includes('m');
  })
); // algum elemento

console.log(frutas.join());
