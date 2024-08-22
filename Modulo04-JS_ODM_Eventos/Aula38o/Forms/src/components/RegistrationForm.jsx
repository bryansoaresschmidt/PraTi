import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [ error, setError ] = useState({}) // Definir como objeto, você pode armazenar cada erro como uma chave-valor

    const [ submitted, setSubmitted] = useState(false) // Mostrar mensagem caso retorna TRUE

    const validate = () => {
        const newError = {}
        
        if (!formData.name) newError.name = 'Nome de usário inválido'
        
        if (!formData.email) {
            newError.email = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            // Verifica se o email tem um formato válido
            newError.email = 'Email Inválido';
        }
        
        if(!formData.password) {
            newError.password = 'Senha é obrigatória'
        } else if (formData.password.length < 8) {
            newError.password = 'Senha deve ter no mínimo 8 caracteres'
        }

        if (!formData.confirmPassword) {
            newError.confirmPassword = "O campo de senha é obrigatório";
        } else if (formData.confirmPassword !== formData.password) {
            // Verifica se a senha de confirmação coincide com a senha original
            newError.confirmPassword = "O campo de senha precisa coincidir";
        }

        return newError

    }


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value // outra forma...
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0) { 
    // Quando você usa Object.keys(validationErrors), ele retorna um array com todas as chaves do objeto validationErrors.
/*
const validationErrors = {
  username: "Nome de usuário é obrigatório",
  email: "E-mail inválido",
};

const keys = Object.keys(validationErrors);
console.log(keys); // ["username", "email"]
*/
            setSubmitted(true); // Define submitted como verdadeiro se não houver erros
            setError({}); // Limpa os erros, caso existam
        } else {
            setError(validationErrors); // Define os erros de validação no estado errors
        }
    };

    return (
        <div>
            <h2>Registre-se</h2>
            {submitted && <p>Registrado com sucesso!</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" name='name' value={formData.name} onChange={handleChange}/>
                    {error.name && <p>{error.name}</p>}
                </div>

                <div>
                    <label>E-mail:</label>
                    <input type="text" name='email' value={formData.email} onChange={handleChange}/>
                    {error.email && <p>{error.email}</p>}
                </div>

                <div>
                    <label>Senha:</label>
                    <input type="password" name='password' value={formData.password} onChange={handleChange}/>
                    {error.password && <p>{error.password}</p>}
                </div>

                <div>
                    <label>Repita sua senha:</label>
                    <input type="password" name='confirmPassword' value={formData.confirmPassword} onChange={handleChange}/>
                    {error.confirmPassword && <p>{error.confirmPassword}</p>}
                </div>

                <button type='submit'>Registrar</button>
            </form>
        </div>
    );
};

export default RegistrationForm;