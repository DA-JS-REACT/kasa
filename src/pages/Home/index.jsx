import img from '../../assets/img.png'
import Card from '../../components/Card'
import Loader from '../../components/loader'
import { useFetch } from '../../hooks'

// import { useEffect } from 'react'

function Home() {
    const url = './data/data.json'
    const { data, error, isLoading } = useFetch(url)

    if (error) {
        return <div>Oups il y a eu un problème</div>
    }

    return (
        <div className="homeWrapper">
            <section className="home-info">
                <img className="home-info__img" src={img} alt="" />
                <h1 className="home-info__title">
                    Chez vous, partout et ailleurs
                </h1>
            </section>
            {isLoading ? (
                <Loader />
            ) : (
                <section className="home-card">
                    {data.map((logement) => (
                        <Card
                            key={logement.id}
                            id={logement.id}
                            cover={logement.cover}
                            title={logement.title}
                        />

                        // <article key={logement.id} className="card">
                        //     <img
                        //         className="card-img"
                        //         src={logement.cover}
                        //         alt={logement.cover}
                        //     />
                        //     <h2 className="card-title">{logement.title}</h2>
                        // </article>
                    ))}
                </section>
            )}
        </div>
    )
}

export default Home
