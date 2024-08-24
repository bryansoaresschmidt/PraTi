import axios from "axios";

function Delete() {

    const deleteRequest = () => {
        axios.delete('https://reqres.in/api/user/2')
        .then(response => {
            console.log('Dados deletados', response.status)
            alert('Usuário deletado com sucesso. Erro: ' + response.status)
        })
        .catch(error => {
            console.error('Erro ao deletar usuário: ', error)
            alert('Erro ao deletar o usuário')
        })
    }

    return (
        <div>
            <button onClick={deleteRequest}>DELETE (deletar)</button>
        </div>
    )
}

export default Delete