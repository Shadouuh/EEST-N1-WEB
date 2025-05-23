import './styles.css'
import { LuSearch, LuFilter } from 'react-icons/lu';

const Previas = () => {
    return (
        <section className="previas-container">
            <section className="bibloteca-hero">
                <div className="hero-content">
                    <h1>Intensificacion y Previas</h1>
                    <p>Recursos y apoyo para completar tus estudios y prepararte para exámenes previos</p>
                </div>
            </section>
            
            <section className="filtros-container">
                <div className="filtros-header">
                    <div className="filtros-icon">
                        <LuFilter />
                    </div>
                    <h2>Buscar materias</h2>
                </div>
                
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Buscar por materia..." 
                        className="search-input"
                    />
                    <LuSearch className="search-icon" />
                </div>
                
                <div className="filtros-section">
                    <div className="filtro-group">
                        <h3>Orientación</h3>
                        <div className="filtro-options">
                            <button className="filtro-btn">Ciclo Básico</button>
                            <button className="filtro-btn">Informática</button>
                            <button className="filtro-btn">Programación</button>
                        </div>
                    </div>
                    
                    <div className="filtro-group">
                        <h3>Año</h3>
                        <div className="filtro-options">
                            <button className="filtro-btn">1°</button>
                            <button className="filtro-btn">2°</button>
                            <button className="filtro-btn">3°</button>
                            <button className="filtro-btn">4°</button>
                            <button className="filtro-btn">5°</button>
                            <button className="filtro-btn">6°</button>
                            <button className="filtro-btn">7°</button>
                        </div>
                    </div>
                    
                    <div className="filtro-group">
                        <h3>Materia</h3>
                        <div className="filtro-options">
                            <button className="filtro-btn">Matemática</button>
                            <button className="filtro-btn">Lengua</button>
                            <button className="filtro-btn">Inglés</button>
                            <button className="filtro-btn">Física</button>
                            <button className="filtro-btn">Programación</button>
                            <button className="filtro-btn">Redes</button>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="resultados-container">
                {/* Resultados de la búsqueda irán aquí */}
            </section>
        </section>
    );
}
export default Previas;