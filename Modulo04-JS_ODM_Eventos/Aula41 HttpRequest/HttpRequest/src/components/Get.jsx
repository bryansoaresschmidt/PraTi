import axios from "axios";

function Get() {

    const sendRequest = () => {
        axios.get('https://reqres.in/api/user/2')
        .then(response => {
            console.log('Dados do usuário:', response.data)
            alert('Usuário recuperado:' + JSON.stringify(response.data))
            localStorage.setItem('123', JSON.stringify(response.data))

        })
        .catch(error => {
            console.log('Erro ao recuperar dados: ', error)
            alert('Erro ao recuperar dados.')
        }) 
    }
        

    return (
        <button onClick={sendRequest}>GET (pegar)</button>
    )
}

export default Get