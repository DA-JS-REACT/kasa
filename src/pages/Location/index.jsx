import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks'
import Dropdown from '../../components/Dropdown'
import Loader from '../../components/loader'
import Rating from '../../components/Rating'
import Carousel from '../../components/Caroussel'
function Location() {
    const { indexCard } = useParams()
    const url = '../data/data.json'
    const { data, error, isLoading } = useFetch(url)
    console.log(data)
    if (error) {
        return <div>Oups il y a eu un problème</div>
    }

    return (
        <section className="locationWrapper">
            {isLoading ? (
                <Loader />
            ) : (
                data
                    .filter((id) => id.id === indexCard)
                    .map((detail) => (
                        <article key={detail.id} className="location">
                            <Carousel pictures={detail.pictures} />
                            <div className="location-header">
                                <div className="location-header__title">
                                    <div className="location-title">
                                        <h1>{detail.title}</h1>
                                        <p>{detail.location}</p>
                                    </div>
                                    <div className="location-tag">
                                        {detail.tags.map((tag) => (
                                            <span className="tag" key={tag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="location-header__info">
                                    <div className="location-host">
                                        <p className="host-name">
                                            {detail.host.name}
                                        </p>
                                        <img
                                            className="host-img"
                                            src={detail.host.picture}
                                            alt=""
                                        />
                                    </div>

                                    <div className="location-rate">
                                        <Rating rate={detail.rating} />
                                    </div>
                                </div>
                            </div>
                            <div className="location-detail">
                                <div className="location-detail__dropdown">
                                    <Dropdown title="Description">
                                        <p>{detail.description}</p>
                                    </Dropdown>
                                </div>
                                <div className="location-detail__dropdown">
                                    <Dropdown title="Equipements">
                                        <ul>
                                            {detail.equipments.map((list) => (
                                                <li key={list}>{list}</li>
                                            ))}
                                        </ul>
                                    </Dropdown>
                                </div>
                            </div>
                        </article>
                    ))
            )}
        </section>
    )
}

export default Location
