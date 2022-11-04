import img from '../../assets/img.png'
import Loader from '../../components/loader'
import { useFetch } from '../../hooks'
// import { useEffect } from 'react'

function Home() {
    const url = './data/data.json'
    const { data, error, isLoading } = useFetch(url)
    console.log(data)
    console.log('error', error)
    console.log('isLoading ', isLoading)
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
                        <article key={logement.id} className="card">
                            <img
                                className="card-img"
                                src={logement.cover}
                                alt={logement.cover}
                            />
                            <h2 className="card-title">{logement.title}</h2>
                        </article>
                    ))}
                </section>
            )}

            {/* <div>{data[0].title}</div> */}
        </div>
    )
}

export default Home
{
    /* <section className="home-info">
<img className="home-info__img" src={img} alt="" />
<h1 className="home-info__title">
    Chez vous, partout et ailleurs
</h1>
</section>
<section className="home-card">
{data.map((logement) => (
    <article key={logement.id} className="card">
        <img
            className="card-img"
            src={logement.cover}
            alt={logement.cover}
        />
        <h2 className="card-title">{logement.title}</h2>
    </article>
))}
</section> */
}
