import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks'
import Dropdown from '../../components/Dropdown'
import Loader from '../../components/loader'
import Rating from '../../components/Rating'
import Carousel from '../../components/Caroussel'
import Error from '../../components/Error'
import { useEffect, useState } from 'react'
function Location() {
    const { indexCard } = useParams()
    const url = '../data/data.json'
    const { data, error, isLoading } = useFetch(url)
    const [isData, setIsData] = useState(false)
    const [findById, setFindById] = useState(null)
    const navigate = useNavigate()

    if (error) {
        return <div>Oups il y a eu un problème</div>
    }
    //  check if the id is valid
    useEffect(() => {
        if (data.length > 0) {
            const find = data.filter((id) => id.id === indexCard)
            setIsData(true)
            if (find.length > 0) {
                setFindById(find)
            } else {
                navigate(' ', { replace: true })
            }
        }
    }, [data])

    return (
        <section className="locationWrapper">
            {isLoading ? (
                <Loader />
            ) : isData ? (
                <article key={{ ...findById }[0].id} className="location">
                    <Carousel pictures={{ ...findById }[0].pictures} />
                    <div className="location-header">
                        <div className="location-header__title">
                            <div className="location-title">
                                <h1>{{ ...findById }[0].title}</h1>
                                <p>{{ ...findById }[0].location}</p>
                            </div>
                            <div className="location-tag">
                                {{ ...findById }[0].tags.map((tag) => (
                                    <span className="tag" key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="location-header__info">
                            <div className="location-host">
                                <p className="host-name">
                                    {{ ...findById }[0].host.name}
                                </p>
                                <img
                                    className="host-img"
                                    src={{ ...findById }[0].host.picture}
                                    alt=""
                                />
                            </div>

                            <div className="location-rate">
                                <Rating rate={{ ...findById }[0].rating} />
                            </div>
                        </div>
                    </div>
                    <div className="location-detail">
                        <div className="location-detail__dropdown">
                            <Dropdown title="Description">
                                <p>{{ ...findById }[0].description}</p>
                            </Dropdown>
                        </div>
                        <div className="location-detail__dropdown">
                            <Dropdown title="Equipements">
                                <ul>
                                    {{ ...findById }[0].equipments.map(
                                        (list) => (
                                            <li key={list}>{list}</li>
                                        )
                                    )}
                                </ul>
                            </Dropdown>
                        </div>
                    </div>
                </article>
            ) : (
                <Error title="500" message=" une erreur s'est produite" />
            )}
        </section>
    )
}

export default Location
