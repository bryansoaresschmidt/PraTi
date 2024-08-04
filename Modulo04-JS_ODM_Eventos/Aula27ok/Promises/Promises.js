// PROMISE é um PROXY

/* Um "proxy" é um intermediário que atua entre dois sistemas, como um cliente e 
um servidor, para facilitar ou controlar a comunicação entre eles */

/* PROMISE pode trabalhar com um valor:
... que pode estar disponível agora
... que pode estar disponível no futuro
... que pode nunca estar disponível */

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let resposta = {};
        
        if (true) { // troque para true para receber o REJECT
            resposta = {codigo: 404, erro: 'Código não encontrado'}
            reject(resposta)
            return; // return para evitar a execução do bloco de sucesso
        }

        resposta = { 0: {id: 01, nome: 'Caio'}, 1: {id: 02, nome: 'Leonan'}, 2: {id: 03, nome: 'Rogério'}}
        resolve(resposta)
    }, 1500)
})

.then((dados) => {
    console.log('Dados recebidos na primeira PROMISE:', dados)

    return new Promise((resolve, reject) => { // Criação de outra PROMISE encadeada
        setTimeout(() => {
            let resposta = {}

            if(false) {
                resposta = {codigo: 1001, erro: 'Não assista One Piece'}
                reject(resposta)
                return;
            }

            resposta = { 0: {id: 01, nome: 'Bryan'}, 1: {id: 02, nome: 'Rodrigo'}, 2: {id: 03, nome: 'Amanda'}, 3: {id: 04, nome: 'Oswaldo'}}
            resolve(resposta)

        }, 2000)
    })
})

.then((dados) => {
    console.log('Dados recebidos na segunda PROMISE:', dados)
})
.catch((erro) => {
    console.error('Erro recebidos na segunda PROMISE:', erro)
})
.then(() => {
    console.log('then 2')
    return 'then 3' // O valor retornado ('then 3') é passado como argumento para o 
                    // próximo .then() no encadeamento.
})
.then((param) => {
    console.log('Resultado do segundo then:', param)
})
.catch((erro) => {
    console.error('Erro recebido na primeira PROMISE:', erro)
})