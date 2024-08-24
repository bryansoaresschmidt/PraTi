import axios from "axios";

function Put() {
    const userData = {
        name: 'Xaruto',
        job: 'Ninja'
    }

    const putRequest = () => {
        axios.put('https://reqres.in/api/users/2', userData)
        .then(response => {
            console.log('Dados atualizados: ', response.data)
            alert('Dados foram atualizados' + JSON.stringify(response.data))
            localStorage.setItem('userData', JSON.stringify(userData))
        })
        .catch(error => {
            console.error('Erro: ', error)
            alert('Erro ao atualizar usuário: ' + JSON.stringify(error))
        })
    }

    return (
        <div>
            <button onClick={putRequest}>PUT (atualizar)</button>
        </div>
    )

}

export default Put