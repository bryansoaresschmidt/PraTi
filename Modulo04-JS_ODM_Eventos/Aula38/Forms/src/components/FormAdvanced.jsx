import { useState } from 'react'

function FormAdvanced() {

    const [ user, setUser ] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }) 

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!user.username || !user.email || !user.password || !user.passwordConfirmation) {
            alert('Está faltando dados!')
        } else if (!emailRegex.test(user.email)) {
            alert('Email inválido')
        } else if (user.password.length < 8) {
            alert('A senha deve ter no mínimo 8 caracteres')
        } else if (user.passwordConfirmation !== user.password) {
            alert('As senhas devem ser iguais')
        } else {
            alert('Usuário cadastrado com sucesso!')
        }
    } 

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" name='username' onChange={handleChange}/>
            </label>
            <label>
                Email:
                <input type="email" name='email' onChange={handleChange}/>
            </label>
            <label>
                Senha:
                <input type="password" name='password' onChange={handleChange}/>
            </label>
            <label>
                Confirmar senha:
                <input type="password" name='passwordConfirmation' onChange={handleChange}/>
            </label>
            <button type='submit'>Enviar dados!</button>
        </form>
    )
}

export default FormAdvanced