import { useState } from 'react'
import styled from 'styled-components'
import QRCode from 'qrcode.react'

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`

const Title = styled.h1`

`

const Input = styled.input`
    padding: 10px;
    width: 256px;
`

const QRContainer = styled.div`

`

const QRCodeGenerator = () => {
    const [ text, setText ] = useState('')

    return (
        <Container>
            <Title>QRCode Generator</Title>
            <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Type and receive your QRCode'
            />
            {text && (
                <QRContainer>
                    <QRCode value={text} size={256}/>
                </QRContainer>
            )}
        </Container>
    )
}

export default QRCodeGenerator