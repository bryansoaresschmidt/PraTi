function inserir(valor) {
    if (document.formulario.tela.value.length < 20) { /* Aqui acesso o name="formulario" */
        document.formulario.tela.value += valor;
    }
} 
function limparTela() {
    document.formulario.tela.value = '';
}

function deletar() {
    let expressao = document.formulario.tela.value;
    document.formulario.tela.value = expressao.substring(0, expressao.length - 1)
}

function calcularTotal() {
    let result = document.formulario.tela.value;
    if (result) {
        document.formulario.tela.value = eval(result) /* EVAL: interpreta tudo que está na string como se fosse uma instrução*/ 
    }
}