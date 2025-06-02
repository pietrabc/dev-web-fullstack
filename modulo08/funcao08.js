// ESCOPO GLOBAL - LOCAL (FUNÇÃO) - BLOCO

let global = 'Sou do escopo Global';

function mensagem() {
  let local = 'sou local da função';
  console.log(local);
}

mensagem();
console.log(global);
//console.log(local);


//nao é uma função - escopo de bloco
if (true) {
    let bloco = 'sou do bloco do IF';
    console.log(bloco);
}