import img from '../../assets/img.png'
import Banner from '../../components/Banner'
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
            <Banner img={img} title="Chez vous, partout et ailleurs" />
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
                    ))}
                </section>
            )}
        </div>
    )
}

export default Home
