import { Link } from 'react-router-dom'
import styles from './index.module.css'


export function Navigation() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.ul}>
                <li><Link to='/'>Home</Link></li> {/* Diferente do <a> ele não recarrega a página */}
                <li><Link to='/servicos'>Serviços</Link></li>
                <li><Link to='/sobre'>Sobre</Link></li>
            </ul>
        </nav>
    )

}