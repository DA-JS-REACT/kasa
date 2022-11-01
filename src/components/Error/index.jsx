import { useLocation } from 'react-router-dom'

function Error() {
    let location = useLocation()
    return (
        <div className="error">
            <h1>Oups 🙈 Cette page {location.pathname} n'existe pas </h1>
        </div>
    )
}
export default Error
