import PropTypes from 'prop-types'
import angle from '../../assets/angle.svg'
import { useState } from 'react'

function Dropdown({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = (e) => {
        setIsOpen(isOpen === false ? true : false)
        e.currentTarget.classList.toggle('dropdown-header__img-open')
        // const parentElement = e.currentTarget.parentElement
        // const contain = parentElement.nextSibling
        // contain.classList.toggle('dropdown-content-open')
    }
    return (
        <div className="dropdownWrapper">
            <div className="dropdown">
                <div className="dropdown-header">
                    <span className="dropdown-header__title">{title}</span>
                    <img
                        onClick={(e) => handleClick(e)}
                        className="dropdown-header__img "
                        src={angle}
                        alt={angle}
                    />
                </div>
                {isOpen ? (
                    <div className=" dropdown-content dropdown-content-open">
                        {children}
                    </div>
                ) : (
                    <div className=" dropdown-content ">{children}</div>
                )}
            </div>
        </div>
    )
}
Dropdown.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default Dropdown
