// Função generator para simular uma conversa de chat
function* chat() {
    let option = yield 'Olá, tudo bem?'

    if (option === 'Sim') {
        option = yield 'Como eu posso te ajudar? Quer uma piada?'

        if(option === 'Sim') {
            let joke; // declara uma variável que será usada pra escolher um joke aleatoriamente no futuro
            
            fetch('./piadas.json') // acessa o arquivo. FETCH retorna uma PROMISE que será resolvida com um objeto RESPONSE
            .then(response => response.json()) // THEN processa a PROMISE do FETCH
                                              // RESPONSE é o objeto JSON recebido da solicitação FECTH 
                                             // converte o objeto JSON em um objeto JavaScript
                                             
            .then(piadas => { // THEN processa a PROMISE do FETCH
                joke = piadas[Math.floor(Math.random() * piadas.length)]
                document.getElementById('message').textContent = joke.joke
            })
            // Busca uma piada aleatória do arquivo piadas.json
            // Escolhe uma piada aleatória
            // Exibe a piada

// FETCH: Faço uma requisição por uma função nativa do JS e indico o caminho
// THEN: Vai pegar resposta como promise e tranformar em uma resposta em si
// THEN:  Devolve uma promise, como se pegasse a resposta anterior e iteirasse sobre ela

            setTimeout(() => {
                document.getElementById('message').textContent = (joke.answer)
                // Exibe a resposta da piada
                console.log("muito bom, nota 0")
            }, 2000)
        } else {
             yield 'Tudo bem, se precisar de algo é só perguntar!'
        }
    } else {
        yield 'Espero que você melhore! Se precisar de algo, estarei por aqui.'
    }
}

const chat1 = chat() // Inicia a instância do gerador de conversa

// Função para avançar no chat conforme resposta do usuário
function startChat() {
    const answer = document.getElementById('answer').value
    // Obtém a resposta do usuário
    let iteration = chat1.next(answer)
    // Avança para a próxima iteração do GENERATOR
    document.getElementById('message').textContent = iteration.value
    // Exibe a próxima mensagem do chat
    document.getElementById('answer').value = ''
    // Limpa a caixa de input
}