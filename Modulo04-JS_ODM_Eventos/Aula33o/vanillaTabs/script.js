const conteudos = [
    [
        'Grécia me lembra filosofia',
        'Japão me lembra o monte Fuji e Goku',
        'Coréia do Sul me lembra Kpop',
    ],
    [
        'Alvorada me lembra crime',
        'Itália me lembra mama mia',
        'Floripa me lembra praia'
    ],
    [
        'Torres me lembra balonismo',
        'Portugal me lembra Nazaré',
        'Rio de Janeiro me lembra tráfico'
    ]
]

const btnTab1 = document.getElementById('btn-tab1')
const btnTab2 = document.getElementById('btn-tab2')
const btnTab3 = document.getElementById('btn-tab3')

const content = document.getElementById('content')

function displayContent(items) {
    listaConteudo = ''
    for (i of items) {
        listaConteudo += `<li>${(i)}</li>`
    }
    const lista = document.createElement('ul')
    content.innerHTML = listaConteudo
    content.append(lista)
}

function activateButton(btn) {
    btnTab1.className = ''
    btnTab2.className = ''
    btnTab3.className = '' // Removo a classe de todos

    btn.className = 'active' // Atribuo a classe active pro botão ativo
}

function handleClick(event) {
    const btnId = event.target.id // pego o id do botão clicado
    activateButton(event.target) // captura características específicas do objeto como o id

    if (btnId === 'btn-tab1') {
        displayContent(conteudos[0])
    }
    else if (btnId === 'btn-tab2') {
        displayContent(conteudos[1])
    }
    else if (btnId === 'btn-tab3') {
        displayContent(conteudos[2])
    }
}
displayContent(conteudos[0])

btnTab1.addEventListener('click', handleClick)
btnTab2.addEventListener('click', handleClick)
btnTab3.addEventListener('click', handleClick)