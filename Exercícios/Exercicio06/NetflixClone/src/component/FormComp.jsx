import styled from "styled-components";

const Form = styled.form`
    background-color: rgba(0, 0, 0, 0.7);
    padding: 40px 60px;
    border-radius: 5px;
    z-index: 1; /* Z-index para ficar acima do background */
    width: 450px;
    margin-top: 100px;
`;

const DivForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
`;

const H1 = styled.h1`
    color: white;
`;

const P = styled.p`
    color: white;
`;

const Input = styled.input`
    background-color: transparent;
    padding: 15px;
    border: solid 1px white;
    color: white;
    width: 100%;
    &:focus {
        outline: none;
        border: solid 2px red; /* Aumenta a borda ao focar */
    }
`;

const ButtonRed = styled.button`
    background-color: red;
    transition: 0.2s;
    border-radius: 5px;
    &:hover {
        background-color: #bd0000;
    }
    color: white;
    width: 100%;
    padding: 10px;
    border: none;
    font-weight: bold;
`;

const ButtonCode = styled.button`
    border-radius: 5px;
    transition: 0.2s;
    background-color: rgba(80, 80, 80, 0.6);
    &:hover {
        background-color: rgba(80, 80, 80, 0.4);
    }
    color: white;
    width: 100%;
    padding: 10px;
    border: none;
    font-weight: bold;
`;

const StyledLink = styled.a`
    color: white;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const CustomCheckbox = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

const Label = styled.label`
    margin-top: 25px;
    margin-bottom: 25px;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
    &::before {
        content: "";
        width: 15px;
        height: 15px;
        border: 1px solid white;
        border-radius: 2px;
        margin-right: 8px;
        background-color: transparent;
    }
    ${CustomCheckbox}:checked + &::before {
        background-color: white;
    }
    ${CustomCheckbox}:checked + &::after {
        content: "✔";
        font-size: 12px;
        color: #000000;
    }
`;

const Footer = styled.footer`
    color: white;
`;

const FormComp = () => {
    return (
            <Form>
                <H1>Entrar</H1>
                <DivForm>
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Senha" />
                    <ButtonRed>Entrar</ButtonRed>
                    <P>OU</P>
                    <ButtonCode>Usar um código de acesso</ButtonCode>
                    <StyledLink href="https://www.netflix.com/br/LoginHelp">
                        Esqueceu a senha?
                    </StyledLink>
                </DivForm>
                <Footer>
                    <CustomCheckbox type="checkbox" id="customCheckbox" />
                    <Label htmlFor="customCheckbox">Lembre-se de mim</Label>
                    <p>
                        Novo por aqui?{" "}
                        <strong>
                            <a href="/signup">Assine agora.</a>
                        </strong>
                    </p>
                </Footer>
            </Form>
    );
};

export default FormComp;
