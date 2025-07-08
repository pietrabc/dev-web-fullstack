//Árvore de Chamadas

// funcaoRecursiva(Texto)
// |
// +-- funcaoRecursiva(exto)
//        |
//        +-- funcaoRecursiva(xto)
//              |
//              +-- funcaoRecursiva(to)
//                    |
//                    +-- funcaoRecursiva(o)
        //                    |
        //                    +-- funcaoRecursiva() - Parada

function recursividade(string) {
 if (string === '') {
    return 0; // condição base
 }

  return 1 + recursividade(string.substring(1)); // chamada recursiva com a string menos o primeiro caractere
}

console.log(recursividade(''));