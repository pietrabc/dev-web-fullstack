let livro = {
    titulo: 'JavaScript para iniciantes',
    autor: 'João Silva',
    ano:2021,
    genero: 'Programação',
};

console.log(livro.titulo);

livro.paginas = 300;
// console.log(livro);

livro['idioma'] = 'Português';
console.log(livro);

delete livro.idioma;
console.log(livro);

console.log('autor' in livro);
console.log('idioma' in livro);