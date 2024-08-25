import { useState, useEffect } from 'react'
import styles from './TitleUpdater.module.css'

export default function Img() {
    const [ number, setNumber ] = useState(1)
    const [ title, setTitle ] = useState('')
    const [ image, setImg ] = useState('')

    const [ isLoading, setIsLoading] = useState(true)


        const fetchTitles = async () => {
            setIsLoading(true)
            const responseImg = `https://picsum.photos/200/300?timestamp=${new Date().getTime()}`
            setImg(responseImg)

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${number}`)
            const responseJson = await response.json()
            setTitle(responseJson)

            setIsLoading(false)
        }

    useEffect(() => {
        fetchTitles()
    }, [number])

    return (
        <div>

        <div className={styles.container}>
            {isLoading ? (
            <div>
                <p>Carregando...</p>
                <img className={styles.loading} src='../../img/loading.gif' />
            </div>
            ) : (
        <div>
            <img src={image} alt="" />
            <h1>{title.title}</h1>
        </div>
        )}
        </div>
            <button onClick={() => number > 1 && setNumber(number - 1)}>Anterior...</button>
            <button onClick={() => setNumber(number + 1)}>Próximo...</button>

        </div>
    )
}