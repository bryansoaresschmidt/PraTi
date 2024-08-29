import { useParams, useNavigate } from "react-router-dom"

const ContactDetails = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    const handleContact = () => {
        return navigate('/')
    }

    return(
        <div>
            <h1>ContactDetails {id}</h1>
            <button onClick={handleContact}>Enviar mensagem</button>
        </div>
    )
}

export default ContactDetails