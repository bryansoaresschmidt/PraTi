import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    gap: 30px;
    width: 100%;
`;
const SubDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    z-index: 0;
    width: 100%;
`;

const H1 = styled.h1`
    color: white;
    font-weight: 900;
    text-align: center;
    @media (max-width: 950px) {
        font-size: 35px;
    }
    @media (min-width: 1000px) {
        font-size: 50px;
    }
    position: relative;
    `;
const H4 = styled.h4`
    color: white;
    text-align: center;
    @media (max-width: 950px) {
        font-size: 18px;
    }
    @media (min-width: 1000px) {
        font-size: 20px;
    }
`;
const P = styled.p`
    color: white;
    font-size: 17px;
    text-align: center;
`;
const Form = styled.form`
    gap: 10px;
    display: flex;
    justify-content: center;
`;
const Input = styled.input`
    color: white;
    padding: 18px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255,255,255, 0.3);
    @media (max-width: 999px) {
        font-size: 15px;
        width: 300px;
    }
    @media (min-width: 1000px) {
        font-size: 17px;
        width: 400px;
    }
    &:focus {
        outline: solid 2px white;
    }
`;
const Button = styled.button`
    display: inline-block;
    padding: 8px 0;
    background-color: red;
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    text-align: center;
    font-size: 23px;
    font-weight: bold;
    @media (max-width: 950px) {
        font-size: 16px;
        width: 150px;
        display: inline-block;
    }
    @media (min-width: 1000px) {
        width: 180px;
        font-size: 23px;
    }
    transition: 0.2s;
    &:hover {
        background-color: #bd0000;
    }
`;

function HomeTitle() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmail(e.target.value);
    };

    return (
        <Div>
            <SubDiv>
                <H1>
                    Filmes, séries e muito <br />
                    mais, sem limites
                </H1>
                <H4>A partir de R$ 20,90. Cancele quando quiser.</H4>
            </SubDiv>
            <SubDiv>
                <P>
                    Quer assistir? Informe seu email para criar ou reiniciar sua
                    assinatura.
                </P>
                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                    <Form onSubmit={handleSubmit}>
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button type="submit">Vamos lá &rsaquo;</Button>
                    </Form>
                </div>
            </SubDiv>
        </Div>
    );
}

export default HomeTitle;
