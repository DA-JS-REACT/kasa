import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Card({ id, cover, title }) {
    return (
        <Link to={`/location/${id}`}>
            <article key={id} className="card">
                <img className="card-img" src={cover} alt={cover} />
                <h2 className="card-title">{title}</h2>
            </article>
        </Link>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    cover: PropTypes.string,
    title: PropTypes.string,
}

export default Card