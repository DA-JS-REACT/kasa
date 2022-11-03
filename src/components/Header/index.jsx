import { NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import logo from '../../assets/LOGO.svg'

function Header() {
    let location = useLocation()
    const currentPage = location.pathname

    useEffect(() => {
        document.title = currentPage
    }, [location])

    return (
        <div className="headerWrapper">
            <Link to="/">
                <img src={logo} alt="logo-kasa" />
            </Link>

            <nav className="nav-header">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    end
                >
                    Acceuil
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    end
                >
                    A Propos
                </NavLink>
            </nav>
        </div>
    )
}

export default Header
