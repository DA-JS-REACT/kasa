import PropTypes from 'prop-types'

function Banner({ img, title }) {
    return (
        <section className="banner">
            <img className="banner-img" src={img} alt="{img}" />
            {title && <h1 className="banner-title">{title}</h1>}
        </section>
    )
}
Banner.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string,
}
// Banner.defaultProps = {
//     title: '',
// }
export default Banner
