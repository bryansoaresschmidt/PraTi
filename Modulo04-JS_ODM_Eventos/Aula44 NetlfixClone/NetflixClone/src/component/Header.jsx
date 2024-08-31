import logo from "../images/Netflix.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  height: 15vh;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0,0,0,1));
  position: absolute;
  z-index: 1;
`


const Logo = styled.img`
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
            <nav>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
        </Div>
    )
}

export default Header