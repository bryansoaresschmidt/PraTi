import background from "../images/back.jpg";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    position: relative;
`;

function BackgroundDiv({ children }) {
    return <Div>{children}</Div>;
}

export default BackgroundDiv;
