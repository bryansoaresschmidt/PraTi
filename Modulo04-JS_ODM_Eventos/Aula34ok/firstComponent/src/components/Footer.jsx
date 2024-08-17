import './Footer.css'

function Footer(props) {
    return (
        <footer>
            <p>
                <a href={props.link}>Desenvolvido por {props.name}</a>
            </p>
        </footer>
    )
}

/*
function Footer({link, name}) {
    return (
        <footer>
            <p>
                <a href={link}>Desenvolvido por {name}</a>
            </p>
        </footer>
    )
}
*/

export default Footer