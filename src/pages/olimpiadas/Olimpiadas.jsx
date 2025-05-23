import './styles.css';
import { LuCalendarClock, LuClock } from 'react-icons/lu';

const Olimpiadas = () => {
    return(
        <section>
            <section className="bibloteca-hero">
                <div className="hero-content">
                    <h1>Olimpiadas Academicas</h1>
                    <p>Competencias que desafían el intelecto y promueven la excelencia</p>
                </div>
            </section>
            
            <section className="olimpiadas-content">
                <div className="olimpiadas-notification">
                    <div className="notification-icon">
                        <LuClock/>
                    </div>
                    <div className="notification-content">
                        <h2>No hay olimpiadas actualmente</h2>
                        <p>En este momento no hay competencias académicas programadas. Próximamente anunciaremos las fechas para las olimpiadas del próximo ciclo.</p>
                        
                        <div className="proximas-olimpiadas">
                            <div className="proximas-header">
                                <LuCalendarClock />
                                <h3>Próximas olimpiadas</h3>
                            </div>
                            <p>Las olimpiadas académicas se realizarán durante el segundo semestre del año escolar.</p>
                            <p>Se publicará información detallada sobre categorías, requisitos y fechas específicas en esta página y en nuestras redes sociales.</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};
export default Olimpiadas;