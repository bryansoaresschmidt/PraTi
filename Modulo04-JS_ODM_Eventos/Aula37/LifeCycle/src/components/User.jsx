import { useState, useEffect } from "react";
import styles from './all.module.css' 

function UserProfile() {
    const [ user, setUser ] = useState(null)  // Inicialmente, 'user' é null

/* Dentro do useEffect, é definida uma função assíncrona fetchUserData que faz uma requisição fetch para obter 
dados do usuário e atualiza o estado user com os dados recebidos.
A função fetchUserData é chamada imediatamente após sua definição.

Retorna uma função de limpeza que será executada quando o componente for desmontado, limpando o estado user com setUser(null).
O array vazio [] como segundo argumento indica que o efeito só deve ser executado uma vez, após a montagem do componente.*/

    useEffect(() => { 
        const fetchUserData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`) // fetch(pegar) é o jeito moderno de fazer requisições assíncronas sem utilizar o AJAX
            const userData = await response.json()                                      // Converte a resposta em JSON
            setUser(userData)                                                          // Atualiza o estado 'user' com os dados recebidos
        }

        fetchUserData() // Chama a função 

// esse return é executado antes da useEffect
return () => setUser(null) // A função de limpeza é retornada e será chamada e setar o usuário como null somente quando o componente for desmontado
}, [])

// esse return é executado antes da useEffect
    return (
        <div className={styles.division}>
            {/* Se 'user' não for null, exibe os dados do usuário */}
            {user ? ( 
                <div>
                    <h1>API de usuários usando useEffect</h1>
                    <h3>Nome: {user.name}</h3>
                    <h3>Email: {user.email}</h3>
                </div>
            ) : (
                <p>Carregando perfil...</p>
            )}
        </div>
    )
}

export default UserProfile


// git pull = git fetch + git merge

// useState -> captura o estado de algo e altera esse estado
// useEffect -> sou capaz de manipular e desmontar ou forçar uma remontagem desse algo

