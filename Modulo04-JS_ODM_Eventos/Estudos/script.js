const form = document.getElementById('form')

const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit', (event) => {
    event.preventDefault() /*preventDefault() => previne o comportamento default do objeto, ou seja cancela o 
    comportamento que os elementos geralmente tem na página, então se o comportamento padrão de um link é abrir 
    um site, nós vamos cancelar isso.*/
    
    checkForm()
    // alert('Formulário Enviado')
})


function checkInputUsername() {
    let usernameValue = username.value
    
    if (usernameValue === '') {
        errorInput(username, 'Nome obrigatório!')
        // mostrar o aviso, e mensagem de erro pode ser validada por um input ou pela própria classe (opcional como vai fazer)
    } else {
        username.parentElement.className = 'form-content a'
    }
}

function checkInputEmail() {
    let emailValue = email.value
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailValue === '' || !emailPattern.test(emailValue)) {
        errorInput(email, 'Digite um email válido!')
    } else {
        email.parentElement.className = 'form-content a'
    }
}

function checkInputPassword() {
    let passwordValue = password.value
    
    if (passwordValue === '') {
        errorInput(password, 'Insira uma senha!')
    } else if (passwordValue.length < 8) {
        errorInput(password, 'A senha informada deve ter mais de 8 dígitos!')
    } else {
        password.parentElement.className = 'form-content a'
    }
}

function checkInputPasswordConfirmation() {
    let passwordValue = password.value
    let passwordConfirmationValue = passwordConfirmation.value
    
    if (passwordConfirmationValue === '') {
        errorInput(passwordConfirmation, 'Insira uma senha!')
    } else if (passwordConfirmationValue.length < 8) {
        errorInput(passwordConfirmation, 'A senha informada deve ter mais de 8 dígitos!')
    } else if (passwordConfirmationValue !== passwordValue) {
        errorInput(passwordConfirmation, 'As senhas não são iguais!');
    } else {
        passwordConfirmation.parentElement.className = 'form-content a'
    }
}

function errorInput(input, message) {
    input.parentElement.className = 'form-content error'
    input.parentElement.querySelector('a').innerText = message
}

function checkForm() {
    checkInputUsername()
    checkInputEmail()
    checkInputPassword()
    checkInputPasswordConfirmation()

    const formItens = form.querySelectorAll('.form-content')
        // Seleciono todos os elementos dentro de form

    const isValid = [...formItens].every((item) => {
        return item.className === 'form-content a'
    }) 
        // [...formItens] devolve index do array com div.form-content error
        /*
        0: div.form-content error,
        1: div.form-content error,
        2: div.form-content error,
        3: div.form-content error
        */

    if (isValid) {
        alert('Dados cadastrados com sucesso!')
    }
}

username.addEventListener('blur', () => {
    checkInputUsername()
})

email.addEventListener('blur', () => {
    checkInputEmail()
})
password.addEventListener('blur', () => {
    checkInputPassword()
})
passwordConfirmation.addEventListener('blur', () => {
    checkInputPasswordConfirmation()
})