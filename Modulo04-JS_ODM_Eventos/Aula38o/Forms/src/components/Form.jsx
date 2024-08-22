import { useState } from 'react'

function Form() {
    const [ name, setName ] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {

        event.preventDefault()

        alert(`Olá ${name}, seja bem-vindo!`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={name} onChange={handleChange}/>
                </label>
                <button type="submit">Enviar</button>
                
            </form>
        </div>
    )

}

export default Form 