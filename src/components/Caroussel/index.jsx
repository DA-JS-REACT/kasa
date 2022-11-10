import PropTypes from 'prop-types'
import angle from '../../assets/angle.svg'
import { useState } from 'react'

function Carousel({ pictures }) {
    const [isIndex, setIsIndex] = useState(0)
    const [numberOfSlides] = useState(pictures.length)
    const handleNext = () => {
        if (isIndex < numberOfSlides - 1) {
            setIsIndex((isIndex) => isIndex + 1)
        } else {
            setIsIndex(0)
        }
    }
    const handlePrevious = () => {
        if (isIndex <= numberOfSlides - 1 && isIndex > 0) {
            setIsIndex((isIndex) => isIndex - 1)
        } else {
            setIsIndex(numberOfSlides - 1)
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
            <img className="caroussel-img" src={pictures[isIndex]} />
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
                    {isIndex + 1} / {numberOfSlides}
                </span>
            </div>
        </div>
    )
}
Carousel.propTypes = {
    pictures: PropTypes.array,
}

export default Carousel
