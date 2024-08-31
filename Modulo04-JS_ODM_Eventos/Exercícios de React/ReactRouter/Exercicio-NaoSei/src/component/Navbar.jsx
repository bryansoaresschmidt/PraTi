import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav>
            <Link to='/'>Home</Link>
            <br />
            <Link to='/user'>Detalhes do usuário</Link>
        </nav>
    )
}

export default Navbar