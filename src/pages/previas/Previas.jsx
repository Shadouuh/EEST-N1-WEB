import './styles.css'
import { LuSearch, LuFilter, LuDownload, LuBookOpen } from 'react-icons/lu';
import { useState, useEffect } from 'react';
import materiasData from '../../data/materiasData.json';

const Previas = () => {
    const [materias, setMaterias] = useState([]);
    const [filteredMaterias, setFilteredMaterias] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOrientacion, setSelectedOrientacion] = useState('');
    const [selectedAño, setSelectedAño] = useState('');
    const [selectedTipoMateria, setSelectedTipoMateria] = useState('');

    useEffect(() => {
        setMaterias(materiasData.materias);
        setFilteredMaterias(materiasData.materias);
    }, []);

    useEffect(() => {
        let filtered = materias;

        // Filtrar por término de búsqueda
        if (searchTerm) {
            filtered = filtered.filter(materia =>
                materia.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                materia.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filtrar por orientación
        if (selectedOrientacion) {
            filtered = filtered.filter(materia => materia.orientacion === selectedOrientacion);
        }

        // Filtrar por año
        if (selectedAño) {
            filtered = filtered.filter(materia => materia.año === selectedAño);
        }

        // Filtrar por tipo de materia
        if (selectedTipoMateria) {
            filtered = filtered.filter(materia => 
                materia.nombre.toLowerCase().includes(selectedTipoMateria.toLowerCase())
            );
        }

        setFilteredMaterias(filtered);
    }, [searchTerm, selectedOrientacion, selectedAño, selectedTipoMateria, materias]);

    const handleDownload = (pdfUrl, nombreMateria) => {
        // Simular descarga de PDF
        console.log(`Descargando PDF: ${nombreMateria} - ${pdfUrl}`);
        alert(`Descargando material de ${nombreMateria}`);
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedOrientacion('');
        setSelectedAño('');
        setSelectedTipoMateria('');
    };

    const orientaciones = [...new Set(materias.map(m => m.orientacion))];
    const años = [...new Set(materias.map(m => m.año))].sort();
    
    // Extraer tipos de materias únicos basados en palabras clave del nombre
    const tiposMaterias = [...new Set(materias.map(m => {
        const nombre = m.nombre.toLowerCase();
        if (nombre.includes('inglés') || nombre.includes('ingles')) return 'Inglés';
        if (nombre.includes('matemática') || nombre.includes('matematica')) return 'Matemática';
        if (nombre.includes('lengua')) return 'Lengua';
        if (nombre.includes('física') || nombre.includes('fisica')) return 'Física';
        if (nombre.includes('química') || nombre.includes('quimica')) return 'Química';
        if (nombre.includes('historia')) return 'Historia';
        if (nombre.includes('geografía') || nombre.includes('geografia')) return 'Geografía';
        if (nombre.includes('programación') || nombre.includes('programacion')) return 'Programación';
        if (nombre.includes('base') && nombre.includes('datos')) return 'Base de Datos';
        if (nombre.includes('redes')) return 'Redes';
        if (nombre.includes('sistemas')) return 'Sistemas';
        if (nombre.includes('hardware')) return 'Hardware';
        if (nombre.includes('software')) return 'Software';
        return 'Otras';
    }))].filter(tipo => tipo !== 'Otras').sort();

    return (
        <section className="previas-container">
            <section className="bibloteca-hero">
                <div className="hero-content-previas">
                    <h1>Intensificación y Previas</h1>
                    <p>Recursos y apoyo para completar tus estudios y prepararte para exámenes</p>
                </div>
            </section>
            
            <section className="filtros-container">
                <div className="filtros-header">
                    <div className="filtros-icon">
                        <LuFilter color="white" stroke='snow' />
                    </div>
                    <h2>Buscar materias</h2>
                    <button className="clear-filters-btn" onClick={clearFilters}>
                        Limpiar filtros
                    </button>
                </div>
                
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Buscar por materia o descripción..." 
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <LuSearch className="search-icon" />
                </div>
                
                <div className="filtros-section">
                    <div className="filtro-group">
                        <h3>Orientación</h3>
                        <div className="filtro-options">
                            {orientaciones.map(orientacion => (
                                <button 
                                    key={orientacion}
                                    className={`filtro-btn ${selectedOrientacion === orientacion ? 'active' : ''}`}
                                    onClick={() => setSelectedOrientacion(selectedOrientacion === orientacion ? '' : orientacion)}
                                >
                                    {orientacion}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="filtro-group">
                        <h3>Año</h3>
                        <div className="filtro-options">
                            {años.map(año => (
                                <button 
                                    key={año}
                                    className={`filtro-btn ${selectedAño === año ? 'active' : ''}`}
                                    onClick={() => setSelectedAño(selectedAño === año ? '' : año)}
                                >
                                    {año}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="filtro-group">
                        <h3>Tipo de Materia</h3>
                        <div className="filtro-options">
                            {tiposMaterias.map(tipo => (
                                <button 
                                    key={tipo}
                                    className={`filtro-btn ${selectedTipoMateria === tipo ? 'active' : ''}`}
                                    onClick={() => setSelectedTipoMateria(selectedTipoMateria === tipo ? '' : tipo)}
                                >
                                    {tipo}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="resultados-container">
                <div className="resultados-header">
                    <h2>Materias disponibles</h2>
                    <span className="resultados-count">
                        {filteredMaterias.length} {filteredMaterias.length === 1 ? 'materia encontrada' : 'materias encontradas'}
                    </span>
                </div>
                
                <div className="materias-grid">
                    {filteredMaterias.map(materia => (
                        <div key={materia.id} className="materia-card">
                            <div className="materia-header" style={{ borderLeftColor: materia.color }}>
                                <div className="materia-icon">
                                    <LuBookOpen size={24} color={materia.color} />
                                </div>
                                <div className="materia-info">
                                    <h3 className="materia-nombre">{materia.nombre}</h3>
                                    <div className="materia-meta">
                                        <span className="materia-orientacion">{materia.orientacion}</span>
                                        <span className="materia-año">{materia.año}</span>
                                    </div>
                                </div>
                            </div>
                            
                           
                            <div className="materia-footer">
                                <button 
                                    className="download-btn"
                                    onClick={() => handleDownload(materia.pdfUrl, materia.nombre)}
                                >
                                    <LuDownload size={18} stroke="white" />
                                    Descargar PDF
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                {filteredMaterias.length === 0 && (
                    <div className="no-results">
                        <div className="no-results-icon">
                            <LuSearch size={48} />
                        </div>
                        <h3>No se encontraron materias</h3>
                        <p>Intenta ajustar los filtros o el término de búsqueda</p>
                        <button className="clear-filters-btn" onClick={clearFilters}>
                            Limpiar todos los filtros
                        </button>
                    </div>
                )}
            </section>
        </section>
    );
}

export default Previas;