const variavelA = false;
if (variavelA) {
  console.log('condição verdadeira');
}

//booleanos tem dois possiveis valores, verdeiro(true) e falso(false)

// Valores Truthy (com cara de verdadeiro)
//Valores Falsy (com cara de falso)

//const variavelFalsy = 0;
// const variavelFalsy = '';
 //const variavelFalsy = null;
 const variavelFalsy = undefined;

if (!variavelFalsy) {
  console.log('Executei pq variável continha um valor com cara de falso');
}
