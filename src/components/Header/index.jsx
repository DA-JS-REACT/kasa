import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.svg'

function Header() {
    return (
        <div>
            <img src={logo} alt="" />
            <nav>
                <Link to="/">Acceuil</Link>
                <Link to="/apropos">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header
