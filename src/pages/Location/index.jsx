import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks'
import Dropdown from '../../components/Dropdown'
import Loader from '../../components/loader'
function Location() {
    const { indexCard } = useParams()
    const url = '../data/data.json'
    const { data, error, isLoading } = useFetch(url)
    console.log(data)
    if (error) {
        return <div>Oups il y a eu un problème</div>
    }

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                data
                    .filter((id) => id.id === indexCard)
                    .map((detail) => (
                        <section key={detail.id} className="ficheWrapper">
                            <img
                                className="fiche-img"
                                src={detail.pictures[0]}
                            />
                            <div className="fiche-header">
                                <div className="fiche-header__title">
                                    <h1>{detail.title}</h1>
                                    <p>{detail.location}</p>
                                </div>
                                <div className="fiche-header__host">
                                    <img src="" alt="" />
                                    <span>{detail.host.name}</span>
                                </div>
                            </div>
                            <div className="fiche-tagRate">
                                <div className="fiche-tagRate__tag"></div>
                                <div className="fiche-tagRate__rate"></div>
                            </div>
                            <div className="fiche-detail">
                                <Dropdown title="Description">
                                    <p>{detail.description}</p>
                                </Dropdown>
                                <Dropdown title="Equipements">
                                    <ul>
                                        {detail.equipments.map((list) => (
                                            <li key={list}>{list}</li>
                                        ))}
                                    </ul>
                                </Dropdown>
                            </div>
                        </section>
                    ))
            )}
            {/* {data
                .filter((id) => id.id === indexCard)
                .map((detail) => (
                    <section key={detail.id} className="ficheWrapper">
                        <img className="fiche-img" src={detail.pictures[0]} />
                        <div className="fiche-header">
                            <div className="fiche-header__title">
                                <h1>{detail.title}</h1>
                                <p>{detail.location}</p>
                            </div>
                            <div className="fiche-header__host">
                                <img src="" alt="" />
                                <span>{detail.host.name}</span>
                            </div>
                        </div>
                        <div className="fiche-tagRate">
                            <div className="fiche-tagRate__tag"></div>
                            <div className="fiche-tagRate__rate"></div>
                        </div>
                        <div className="fiche-detail">
                            <Dropdown title="Description">
                                <p>{detail.description}</p>
                            </Dropdown>
                            <Dropdown title="Equipements">
                                <ul>
                                    {detail.equipments.map((list) => (
                                        <li key={list}>{list}</li>
                                    ))}
                                </ul>
                            </Dropdown>
                        </div>
                    </section>
                ))} */}
        </div>
    )
}

export default Location
