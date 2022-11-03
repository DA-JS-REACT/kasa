import logo from '../../assets/logo-footer.svg'

function Footer() {
    return (
        <div className="footerWrapper">
            <img className="footer-logo" src={logo} alt="logo-kasa" />
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
