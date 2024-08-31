export function getEnderecoByCEP(cep) {
    return fetch(`https:viacep.com.br/ws/${cep}/json/`).then(response => response.json())
}

// eu consigo exportar uma função desde que esteja com export