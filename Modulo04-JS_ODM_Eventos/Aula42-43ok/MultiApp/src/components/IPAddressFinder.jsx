import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    background-color: #ff7575;
`
const Title = styled.h1`

`

const IPContainer = styled.div`
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 300px;
    background-color: #f9f9f9;
`;

const Input = styled.input`
    padding: 15px;
    width: 30%;
`
const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  width: 30%;

  &:hover {
    background-color: #0056b3;
  }
`;

const IPAddressFinder = () => {
    const [ ip, setIp ] = useState('')
    const [ ipData, setIpData ] = useState(null)

    const ipGet = async () => {
        try {
            const response = await axios.get(`https://ipinfo.io/${ip}/json`)
            setIpData(response.data)
            console.log(response.data)
        } catch (error) {
            console.error('Erro:', error)
            alert('Error: ' + error)
        }
    }

     return (
        <Container>
            <Title>IP Address Finder</Title>
            <Input
            type="text" 
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="Type the IP right here"
            />
            <Button onClick={ipGet}>Request</Button>
                { ipData && (
                    <IPContainer>
                    <h2>Information:</h2>
                    <br />
                    <p><strong>IP: </strong>{ipData.ip}</p>
                    <p><strong>City: </strong>{ipData.city}, {ipData.region} - {ipData.country}</p>
                    <p><strong>ISP: </strong>{ipData.org}</p>
                    <p><strong>LOC: </strong>{ipData.loc}</p>
                    <p><strong>Postal Code: </strong>{ipData.postal}</p>
                    <p><strong>Time Zone: </strong>{ipData.timezone}</p>
                    <p><strong>Read Me: </strong>{ipData.readme}</p>
            </IPContainer>
                )}
        </Container>
     )
}

export default IPAddressFinder