import { useState, useEffect } from 'react'

function TimerComponent_useEffect() {
    const [ counter, setCounter ] = useState(5)
    const message = 'Tempo acabou!'

    useEffect(() => {
        const intervalId = 
        setInterval(() => {
            setCounter(prevCounter => {
                if (prevCounter === 0) {
                    clearInterval(intervalId) // Para o cronômetro imediatamente quando a contagem chega a 0. Isso é feito para que o cronômetro não continue rodando e gastando recursos depois que a contagem chega ao fim.
                    return 0 // Garante que o estado seja 0 ou string
                }
                return prevCounter - 1
            })
        }, 1000)

        return () => clearInterval(intervalId) // Garante que o cronômetro seja parado se a página for fechada antes que a contagem chegue a 0. Isso evita que o cronômetro continue rodando "em segundo plano" e consuma recursos mesmo depois que você saiu da página.

        },[]) // Array vazio garante que o efeito seja executado apenas uma vez

    return (
        <div>
            <h1>{counter === 0 ? message : `${counter} segundos`}</h1>
        </div>
    )
}

export default TimerComponent_useEffect

// 1. Inicia o intervalo para decrementar o contador.
// 2. Limpa o intervalo quando o contador atinge 0 e garante que o valor final do contador seja 0.
// 3. Limpa o intervalo quando o componente é desmontado, evitando vazamentos de memória.

