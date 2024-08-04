const fechar = document.getElementById('container-fechar')
const imagemGrande = document.getElementById('imagemGrande')

function mostrarImagem(img) {
    imagemGrande.src = img.src
    fechar.style.visibility = 'visible';
    fechar.style.opacity = '1';
}

function mostrarImagemBtn(src) {
    imagemGrande.src = src
    fechar.style.visibility = 'visible'
    fechar.style.opacity = '1'
}

function fecharImagens() {
    fechar.style.opacity = '0';
    setTimeout(() => {
        fechar.style.visibility = 'hidden';
    }, 500)
}