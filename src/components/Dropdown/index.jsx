import PropTypes from 'prop-types'
import angle from '../../assets/angle.svg'

function Dropdown({ title, children }) {
    return (
        <div className="dropdownWrapper">
            <div className=" dropdown">
                <div className="dropdown-header">
                    <span className="dropdown-header__title">{title}</span>
                    <img
                        className="dropdown-header__img"
                        src={angle}
                        alt={angle}
                    />
                </div>

                <div className="description-body dropdown-content">
                    {children}
                </div>
            </div>
        </div>
    )
}
Dropdown.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default Dropdown
