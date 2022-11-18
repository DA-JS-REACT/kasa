import PropTypes from 'prop-types'
import angle from '../../assets/angle.svg'
import { useState } from 'react'

function Dropdown({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(isOpen === false ? true : false)
    }

    return (
        <div className="dropdownWrapper">
            <div className="dropdown">
                <div className="dropdown-header">
                    <span className="dropdown-header__title">{title}</span>
                    <img
                        onClick={() => handleClick()}
                        className={
                            isOpen
                                ? 'dropdown-header__img dropdown-header__img-open'
                                : 'dropdown-header__img'
                        }
                        src={angle}
                        alt={angle}
                    />
                </div>
                <div
                    className={
                        isOpen
                            ? 'dropdown-content dropdown-content-open'
                            : 'dropdown-content dropdown-content-close'
                    }
                >
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
