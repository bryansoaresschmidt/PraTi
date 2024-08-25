import { useEffect, useState } from "react";

export default function RealTimeClock() {

    const [ time, setTime ] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1)

        return () => clearInterval(interval)

    }, [])

    return(
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h2>4: Hora Atual:</h2>
            <p>{`${time.toLocaleTimeString()}.${time.getMilliseconds().toString().padStart(3, '0')}`}</p>
            <p>{}</p>
        </div>
    )
}


// Exercício 4: Relógio em Tempo Real

// Objetivo: Criar um relógio digital que atualiza a hora a cada segundo.

// Instruções:

//     Crie um componente chamado RealTimeClock.
//     Utilize useState para armazenar a hora atual.
//     Utilize useEffect para configurar um intervalo que atualiza a hora a cada segundo.
//     Certifique-se de limpar o intervalo quando o componente for desmontado para evitar vazamentos de memória.