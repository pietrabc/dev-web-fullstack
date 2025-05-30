// && (AND) - Ambas as condições são verdadeiras
let idade = 20;
let codigoPromocional = true;

let idade2 = 15;

//Verificação se o usuário tem idade suficiente e possui um código
let podeFazerLogin = idade >= 18 && codigoPromocional;
console.log(podeFazerLogin);
let podeFazerLogin2 = idade2 >= 18 && codigoPromocional; // false
console.log(podeFazerLogin2);

// || (OR) - Apenas uma condição é verdadeira
let loginOr = idade >= 18 || codigoPromocional; // TRUE
let loginOr2 = idade2 >= 18 || codigoPromocional;
console.log(loginOr);
console.log(loginOr2);

let promocional = false;
console.log(idade2 >= 18 || promocional);

// ! (NOT) - Inverte valor booleano
let perfilConfigurado = false;

// Verificação se o perfil não está configurado
let alerta = !perfilConfigurado;
console.log(alerta);
