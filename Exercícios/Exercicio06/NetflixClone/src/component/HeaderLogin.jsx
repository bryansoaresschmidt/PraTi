import logo from "../images/Netflix.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
    height: 15vh;
    width: 100%;
    position: absolute;
    z-index: 1;
`;

const Logo = styled.img`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        width: 100px;
        left: 20px;
        top: 20px;
    }
    @media (min-width: 769px) {
        width: 150px;
        left: 150px;
        top: 20px;
    }
    position: absolute;
`;

const Header = () => {
    return (
        <Div>
            <Logo src={logo} />
        </Div>
    );
};

export default Header;
