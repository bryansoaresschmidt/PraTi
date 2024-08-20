import { useState, useEffect } from 'react'
import styles from './all.module.css' 

function TimerComponent() {
    const [ counter, setCounter ] = useState(5)

    useEffect(() => {
        const timerId = setInterval(() => {     // Quando o componente for montado...
            setCounter(prevCounter => prevCounter - 1) // prevCounter é o counter
        }, 1000)

            return () => {                          
                clearInterval(timerId)              // Quando o componente for desmontado...
                console.log('Valor zerado')
            }
        }, [])

    return (
        <div className={styles.division}>
            <h1>Contador usando useEffect:</h1>
            <h3>{counter}</h3>
        </div>
    )
}

export default TimerComponent
