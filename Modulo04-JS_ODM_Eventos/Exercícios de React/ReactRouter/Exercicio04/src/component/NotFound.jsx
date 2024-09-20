import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Arquivo não encontrado</h1>
            <h1>Erro 404</h1>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <Link to='/'>Voltar ao Menu Inicial</Link>
            </div>
        </div>
    )

}

export default NotFound;