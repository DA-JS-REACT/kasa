import Banner from '../../components/Banner'
import img from '../../assets/kalen-emsley.png'
import Dropdown from '../../components/Dropdown'

function About() {
    return (
        <div className="aboutWrapper">
            <Banner img={img} />
            <section className="about">
                <Dropdown title="Fiabilité">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati veniam facilis eligendi harum debitis ad
                        ducimus hic soluta? Dolore ab rerum doloribus tenetur
                        eaque ducimus esse delectus, eos illo quisquam.
                    </p>
                </Dropdown>
                <Dropdown title="Respect">
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>
                </Dropdown>
                <Dropdown title="Service">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati veniam facilis eligendi harum debitis ad
                        ducimus hic soluta? Dolore ab rerum doloribus tenetur
                        eaque ducimus esse delectus, eos illo quisquam.
                    </p>
                </Dropdown>
                <Dropdown title="Sécurité">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati veniam facilis eligendi harum debitis ad
                        ducimus hic soluta? Dolore ab rerum doloribus tenetur
                        eaque ducimus esse delectus, eos illo quisquam.
                    </p>
                </Dropdown>
            </section>
        </div>
    )
}
export default About
