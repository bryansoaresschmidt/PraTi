import './HelloWorld.css';
import spotifyLogo from './img/spotify.svg';

function HelloWorld() {
    return (
        <header>
            <div className="navbar">
                <img className="spotify-logo-nav" src={spotifyLogo} alt=""/>
                <nav className="links">
                    <a href="#">Premium</a>
                    <a href="#">Ajuda</a>
                    <a href="#">Baixar</a>
                    <a>|</a>
                    <a href="#">Inscreva-se</a>
                    <a href="#">Entrar</a>
                </nav>
            </div>
        </header>
    )
}

export default HelloWorld