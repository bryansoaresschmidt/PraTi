import { useState } from 'react'
import styles from './AddressForm.module.css'

function AddressForm() {
    const [ address, setAddress ] = useState({
        street: '',
        city: '',
        postalCode: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;  // no nosso target temos os atributos target.value e target.name! Desestruturamos para definir cada um!
        setAddress((prevAddress) => ({
            ...prevAddress, 
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!address.street || !address.city || !address.postalCode) {
            alert('Preencha todos os campos!')
        } else {
            alert(`Rua: ${address.street} - ${address.city}, ${address.postalCode}`)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                Rua:
                <input type="text" name="street" onChange={handleChange} required/>
            </label>
            <label>
                Cidade:
                <input type="text" name="city" onChange={handleChange} required/>
            </label>
            <label>
                CEP:
                <input type="text" name="postalCode" onChange={handleChange} required/>
            </label>
            <div>
            <button type='submit'>SUBMIT</button>
            </div>
        </form>
    )
}

export default AddressForm