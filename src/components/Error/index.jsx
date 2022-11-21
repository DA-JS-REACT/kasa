import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Error({ title, message }) {
    let location = useLocation()
    return (
        <div className="errorWrapper">
            <div className="errorBody">
                <h1 className="errorBody-title">{title}</h1>
                <p className="errorBody-message">Oups 🙈 {message}</p>
            </div>

            <div className="errorLink">
                <Link to="/"> Retourner à la page d'acceuil</Link>
            </div>
        </div>
    )
}
Error.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
}
Error.defaultProps = {
    title: '404',
    message: `Cette page ${location.pathname}  n'existe pas`,
}
export default Error
