import logo from "../images/Netflix.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineTranslate } from "react-icons/hi";

const Div = styled.div`
    height: 15vh;
    width: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 999px) {
        gap: 10vw;
    }
    @media (min-width: 1000px) {
        gap: 35vw;
    }
`;

const Logo = styled.img`
    @media (max-width: 768px) {
        width: 100px;
    }
    @media (min-width: 769px) {
        width: 150px;
    }
    position: relative;
`;

const Nav = styled.nav`
    display: flex;
    gap: 1vw;
`;

const SelectContainer = styled.div`
    position: relative;
    padding: 0px 10px;
    height: 30px;

    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
`;

const StyledTranslateIcon = styled(HiOutlineTranslate)`
    position: relative;
    left: 0px;
    top: 2px;
`;

const Select = styled.select`
    position: relative;
    height: 30px;

    color: rgba(255, 255, 255, 1);
    border: none;
    background: transparent;

    font-size: 17px;
`;

const Option = styled.option`
    color: rgba(0, 0, 0, 1);
`;

const ButtonLink = styled(Link)`
    padding: 7px 15px 0px;
    background-color: red;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    transition: 0.2s;
    &:hover {
        background-color: #bd0000;
    }
`;

const Header = () => {
    const [language, setLanguage] = useState("pt-br");

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <Div>
            <Logo src={logo} />
            <Nav>
                <SelectContainer>
                    <StyledTranslateIcon />
                    <Select
                        id="language"
                        value={language}
                        onChange={handleChange}
                    >
                        <Option value="pt-br">Português</Option>
                        <Option value="en">English</Option>
                    </Select>
                </SelectContainer>
                <ButtonLink to="/login">Entrar</ButtonLink>
            </Nav>
        </Div>
    );
};

export default Header;
