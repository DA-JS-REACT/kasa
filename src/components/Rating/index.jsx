import star from '../../assets/star.svg'
import starChecked from '../../assets/starChecked.svg'
import PropTypes from 'prop-types'

function Rating({ rate }) {
    const nbr = parseInt(rate)
    const max = 5
    let rating = []
    for (let i = 0; i < max; i++) {
        rating.push(<img key={i} src={i < nbr ? starChecked : star} />)
    }

    return <div>{rating}</div>
}
Rating.propTypes = { rate: PropTypes.string }

export default Rating
