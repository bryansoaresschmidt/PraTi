import { useState } from 'react'
import axios from 'axios'

function Post() {
    const [ user, setUser ] = useState({
        name: '',
        job: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setUser({
            ...user,
            [name]: value 
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('https://reqres.in/api/users', user)
            console.log(response.data)
            alert(`Usuário criado com sucesso! \n ID: ${response.data.id} \n Nome: ${response.data.name} \n Profissão: ${response.data.job}`)
            localStorage.setItem('user', JSON.stringify(user))

        } catch (error) {
            console.log(error)
            alert('Erro ao criar usuário')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Nome:
                <input type="text" name="name" onChange={handleChange} value={user.name}/>
            </label>
            <label> Profissão:
                <input type="text" name="job" onChange={handleChange} value={user.job}/>
            </label>
            <br />
            <button type="submit">POST (enviar)</button>
        </form>
    )
}

export default Post