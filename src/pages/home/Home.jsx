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
                <div className="features-container">
                    <div className="feature-card modern">
                        <div className="feature-content">
                            <div className="feature-icon">
                                <LuCalendar stroke="white" size={32}/>
                            </div>
                            <div className="feature-text">
                                <h3>Desde 1968</h3>
                                <p>Más de 55 años formando profesionales técnicos de excelencia</p>
                            </div>
                        </div>
                        <div className="feature-gradient"></div>
                    </div>
                    
                    <div className="feature-card modern">
                        <div className="feature-content">
                            <div className="feature-icon">
                                <LuUsers stroke="white" size={32}/>
                            </div>
                            <div className="feature-text">
                                <h3>1200+ Estudiantes</h3>
                                <p>Jóvenes con grandes ideas construyendo su futuro técnico</p>
                            </div>
                        </div>
                        <div className="feature-gradient"></div>
                    </div>
                    
                    <div className="feature-card modern">
                        <div className="feature-content">
                            <div className="feature-icon">
                                <LuGraduationCap stroke="white" size={32}/>
                            </div>
                            <div className="feature-text">
                                <h3>400+ Egresados</h3>
                                <p>Profesionales destacados en empresas nacionales e internacionales</p>
                            </div>
                        </div>
                        <div className="feature-gradient"></div>
                    </div>
                    
                    <div className="feature-card modern">
                        <div className="feature-content">
                            <div className="feature-icon">
                                <LuBuilding stroke="white" size={32}/>
                            </div>
                            <div className="feature-text">
                                <h3>Convenios Activos</h3>
                                <p>Alianzas estratégicas con empresas del sector tecnológico</p>
                            </div>
                        </div>
                        <div className="feature-gradient"></div>
                    </div>
                </div>
            </section>
            <section className="orientaciones-inicio gray">
                <div className="orientaciones-header">
                    <h2>Nuestras <span>Orientaciones</span></h2>
                    <p>Formamos profesionales técnicos con las habilidades necesarias para destacar en el mundo tecnológico actual</p>
                </div>
                <section className="orientaciones-container">
                    <div className="orientacion-card-modern">
                        <div className="orientacion-visual">
                            <div className="orientacion-overlay">
                                <div className="orientacion-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM20 19H4V5H20V19Z" fill="white"/>
                                        <path d="M6 7H18V9H6V7ZM6 11H18V13H6V11ZM6 15H14V17H6V15Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="orientacion-content">
                            <div className="orientacion-header">
                                <h3>Informática</h3>
                                <span className="orientacion-badge">Sistemas y Redes</span>
                            </div>
                            <p className="orientacion-description">
                                Especialízate en hardware, redes y administración de sistemas. Conviértete en un experto en infraestructura tecnológica.
                            </p>
                            <div className="orientacion-skills">
                                <div className="skill-item">
                                    <span className="skill-dot"></span>
                                    <span>Administración de redes</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-dot"></span>
                                    <span>Configuración de servidores</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-dot"></span>
                                    <span>Seguridad informática</span>
                                </div>
                            </div>
                            <div className="orientacion-jobs">
                                <span className="job-chip">Administrador de sistemas</span>
                                <span className="job-chip">Técnico IT</span>
                                <span className="job-chip">Especialista en seguridad</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="orientacion-card-modern">
                        <div className="orientacion-visual programacion">
                            <div className="programacion-bg">
                                <svg className="code-pattern" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <text x="10" y="20" fill="rgba(255,255,255,0.1)" font-family="monospace" font-size="8">&lt;html&gt;</text>
                                    <text x="15" y="35" fill="rgba(255,255,255,0.1)" font-family="monospace" font-size="6">&lt;body&gt;</text>
                                    <text x="20" y="50" fill="rgba(255,255,255,0.1)" font-family="monospace" font-size="6">function()</text>
                                    <text x="15" y="65" fill="rgba(255,255,255,0.1)" font-family="monospace" font-size="6">&lt;/body&gt;</text>
                                    <text x="10" y="80" fill="rgba(255,255,255,0.1)" font-family="monospace" font-size="8">&lt;/html&gt;</text>
                                </svg>
                            </div>
                            <div className="orientacion-overlay">
                                <div className="orientacion-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="orientacion-content">
                            <div className="orientacion-header">
                                <h3>Programación</h3>
                                <span className="orientacion-badge">Desarrollo de Software</span>
                            </div>
                            <p className="orientacion-description">
                                Crea aplicaciones innovadoras y resuelve problemas con código. Desarrolla software que impacte el mundo digital.
                            </p>
                            <div className="orientacion-skills">
                                <div className="skill-item">
                                    <span className="skill-dot"></span>
                                    <span>Desarrollo web y móvil</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-dot"></span>
                                    <span>Gestión de bases de datos</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-dot"></span>
                                    <span>Diseño de interfaces</span>
                                </div>
                            </div>
                            <div className="orientacion-jobs">
                                <span className="job-chip">Desarrollador web</span>
                                <span className="job-chip">Desarrollador móvil</span>
                                <span className="job-chip">Analista de sistemas</span>
                            </div>
                        </div>
                    </div>
                </section>
                
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