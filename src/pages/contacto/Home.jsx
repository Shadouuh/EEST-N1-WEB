import './styles.css';
import { LuArrowBigRight, LuArrowDown } from 'react-icons/lu';
import { LuArrowBigDownDash } from 'react-icons/lu';
import { LuUsers, LuGraduationCap, LuCalendar, LuBuilding } from 'react-icons/lu';
import Informatica from '../../assets/images/Informatica.gif';
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
            <section className="features">
                <div className="feature-card">
                    <div className="feature-icon">
                        <LuCalendar stroke="#8a0000" size={24}/>
                    </div>
                    <h3>Desde 1985</h3>
                    <p>Más de 35 años formando profesionales técnicos de excelencia para el mundo laboral</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <LuUsers stroke="#8a0000" size={24}/>
                    </div>
                    <h3>1200+ Estudiantes</h3>
                    <p>Alumnos, con grandes ideas y aspiraciones, convirtiendose cada dia en un mejor futuro tecnico</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <LuGraduationCap stroke="#8a0000" size={24}/>
                    </div>
                    <h3>400+ Egresados</h3>
                    <p>Profesionales destacados en empresas nacionales e internacionales</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                    <LuBuilding  stroke="#8a0000" size={24}/>
                    </div>
                    <h3>2+ Empresas</h3>
                    <p>Alianzas estratégicas con las principales compañías del sector tecnológico</p>
                </div>
                
            </section>
            <section className="orientaciones-inicio gray">
                <div className="orientaciones-header">
                    <h2>Nuestras <span>Orientaciones</span></h2>
                    <p>Formamos profesionales técnicos con las habilidades necesarias para destacar en el mundo tecnológico actual</p>
                </div>
                <div className="informatica-image">
                <img src={Informatica} alt="" />
                </div>
                
            </section>
            <section className="cursos-inicio">
                <div className="cursos-header">
                    <h2>Nuestros <span>Cursos</span></h2>
                    <p>Explora nuestros cursos organizados por orientación y año</p>
                </div>
                <div className="cursos-cards">
                    <div className="curso-card">
                        <div className="curso-image ciclo-basico">
                            <h3>Ciclo Básico</h3>
                        </div>
                        <div className="curso-content">
                            <p>Formación general y técnica inicial para los primeros años de educación secundaria.</p>
                        </div>
                    </div>
                    
                    <div className="curso-card">
                        <div className="curso-image informatica">
                            <h3>Informática</h3>
                        </div>
                        <div className="curso-content">
                            <p>Especialización en sistemas, redes, hardware y administración de sistemas.</p>
                        </div>
                    </div>
                    
                    <div className="curso-card">
                        <div className="curso-image programacion">
                            <h3>Programación</h3>
                        </div>
                        <div className="curso-content">
                            <p>Especialización en desarrollo de software, aplicaciones web y móviles.</p>
                        </div>
                    </div>
                </div>
                <div className="cursos-footer">
                    <a href="/cursos" className="explorar-cursos">Explorar todos los cursos</a>
                </div>
            </section>
        </div>
    );
};
export default Home;