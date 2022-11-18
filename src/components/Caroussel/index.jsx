import PropTypes from 'prop-types'
import angle from '../../assets/angle.svg'
import { useState } from 'react'

function Carousel({ pictures }) {
    const [index, setIndex] = useState(0)
    const numberOfSlides = pictures.length
    const handleNext = () => {
        if (index < numberOfSlides - 1) {
            setIndex((index) => index + 1)
        } else {
            setIndex(0)
        }
    }
    const handlePrevious = () => {
        if (index <= numberOfSlides - 1 && index > 0) {
            setIndex((index) => index - 1)
        } else {
            setIndex(numberOfSlides - 1)
        }
    }
    return (
        <div className="caroussel">
            <div className="caroussel-left">
                <img
                    onClick={handlePrevious}
                    className="caroussel-icon previous"
                    src={angle}
                    alt="previous"
                />
            </div>
            <img className="caroussel-img" src={pictures[index]} />
            <div className="caroussel-right">
                <img
                    onClick={handleNext}
                    className="caroussel-icon next"
                    src={angle}
                    alt="next"
                />
            </div>
            <div className="caroussel-counter">
                <span>
                    {index + 1} / {numberOfSlides}
                </span>
            </div>
        </div>
    )
}
Carousel.propTypes = {
    pictures: PropTypes.array,
}

export default Carousel
