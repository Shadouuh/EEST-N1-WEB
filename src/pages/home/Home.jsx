import './styles.css';
import { LuArrowDown } from 'react-icons/lu';
import { LuArrowBigDownDash } from 'react-icons/lu';
const Home = () => {
    return(
        <div className="home-container">
            <section className="hero-header">
                <h1>EEST N°1 Monte Grande</h1>
                <p>Formando Tecnicos desde 1968</p>
                <div className="hero-buttons">
                    <button className='hero-btn red'>
                        Ver Mas
                        <LuArrowBigDownDash stroke="snow" size={14}/>
                    </button>
                    <button className='hero-btn white'>
                        Inscribirse
                    </button>
                </div>
            </section>
            <section className="orientaciones-inicio">

            </section>
            <section className="cursos-inicio"></section>
        </div>
    );
};
export default Home;