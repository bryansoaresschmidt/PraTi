import { useParams, useNavigate } from "react-router-dom"

const UserDetails = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const handleContact = () => {
        return navigate('/user')
    }

    return(
        <div>
            <h1>UserDetails</h1>
            <h1>Usuário Nº:{id}</h1>
            <button onClick={handleContact}>Voltar</button>
        </div>
    )
}

export default UserDetails