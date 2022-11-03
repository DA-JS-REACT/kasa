import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Error() {
    let location = useLocation()
    return (
        <div className="errorWrapper">
            <div className="errorBody">
                <h1 className="errorBody-title">404</h1>
                <p className="errorBody-message">
                    Oups 🙈 Cette page {location.pathname} n'existe pas{' '}
                </p>
            </div>

            <div className="errorLink">
                <Link to="/"> Retourner à la page d'acceuil</Link>
            </div>
        </div>
    )
}
export default Error
