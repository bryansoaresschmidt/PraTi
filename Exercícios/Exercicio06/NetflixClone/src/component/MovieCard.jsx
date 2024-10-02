import styled from "styled-components";

const Div = styled.div`
    padding: 15px 20px;
    position: relative;
    left: -000px;
    height: 300px;
    /* Tenho que usar o slider aqui */
    `
const DivScale = styled.div`
    transition: 0.2s;
    &:hover {
        transform: scale(1.02);
    }
`
const Img = styled.img`
    width: 180px;
    border-radius: 10px;
`
const H2 = styled.h2`
    position: relative;
    top: -150px;
    left: -20px;
    font-size: 100px;
    -webkit-text-stroke: 2px white; /* Borda ao redor do texto */
    -webkit-text-fill-color: black; /* Cor do preenchimento do texto */
   
`
const P = styled.p`
    position: relative;
    background-color: red;
    padding: 5px 10px;
    float: left;
    top: -149px;
    left: 45px;
    border-radius: 5px 5px 0 0;
    font-size: 15px;
    font-weight: bolder;
`
const Button = styled.button`
    color: black;
    height: 10px;
`
const imageUrl = import.meta.env.VITE_IMG;
import defaultImage from "../images/erro_imagens.jpg";

const MovieCard = ({ movie, index, onClick }) => {
    return (
        <Div onClick={onClick}>
            <DivScale>
                <Img src={movie.poster_path ? imageUrl + movie.poster_path : defaultImage} alt={movie.title || 'Imagem padrão'} />
                <H2>{index}</H2>
                {index < 6 && <P>Novidade</P>}
            </DivScale>
        </Div>
    )
}

export default MovieCard;