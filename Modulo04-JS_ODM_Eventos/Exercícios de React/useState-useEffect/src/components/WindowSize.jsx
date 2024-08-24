import { useEffect, useState } from 'react'

function WindowSize() {
    const [ width, setWidth ] = useState(window.innerWidth)
    const [ height, setHeight ] = useState(window.innerHeight)

    const handleResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
        
    }, [])
    
        return (
            <p>A proporção da tela é: {width}x{height}px</p>
        )
}

export default WindowSize