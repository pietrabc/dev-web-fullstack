// onmouseover="this.style.color='red';"
// onmouseout="this.style.color='black';"


function mudarCor(elemento,cor) {
    elemento.style.color = cor;
}

//onclick="alert('Botão Clicado')"
function clicarBotao() {
    alert('Botão Clicado');
}

//onfocus="this.value='Campo em foco';"
//onblur="this.value='';"

function campoEmFoco(elemento) {
    elemento.value = 'Campo em Foco'
}

function campoForaFoco (elemento) {
    elemento.value = ''
}

//onmouseover="this.src='imagem2.png';" 
//onmouseout="this.src='imagem1.png';"/>

function mudarImagemFacil(imagem, novoSrc) {
    imagem.src = novoSrc;
}