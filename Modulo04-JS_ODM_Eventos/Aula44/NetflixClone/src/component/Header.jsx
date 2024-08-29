import logo from "../images/Netflix.png";
import styled from "styled-components";

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
        <>
            <Logo src={logo} />
        </>
    )
}

export default Header