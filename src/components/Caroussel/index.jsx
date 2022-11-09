import PropTypes from 'prop-types'

function Carousel({ pictures }) {
    return (
        <div className="carousel">
            <img className="carousel-img" src={pictures} />
        </div>
    )
}
Carousel.propTypes = { pictures: PropTypes.string }
export default Carousel
