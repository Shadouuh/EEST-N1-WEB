import React from 'react';
import './styles.css';
import { LuBook, LuClock, LuCalendarCheck, LuBookOpen } from 'react-icons/lu';

const Bibloteca = () => {
    // Datos de ejemplo para el catálogo de libros
    const libros = [
        { id: 1, titulo: 'Matemáticas Avanzadas', autor: 'Juan Pérez', categoria: 'Educación', disponible: true },
        { id: 2, titulo: 'Historia Argentina', autor: 'María González', categoria: 'Historia', disponible: true },
        { id: 3, titulo: 'Física Moderna', autor: 'Carlos Rodríguez', categoria: 'Ciencias', disponible: false },
        { id: 4, titulo: 'Literatura Contemporánea', autor: 'Ana López', categoria: 'Literatura', disponible: true },
        { id: 5, titulo: 'Programación en Python', autor: 'Roberto Sánchez', categoria: 'Informática', disponible: false },
        { id: 6, titulo: 'Química Orgánica', autor: 'Laura Martínez', categoria: 'Ciencias', disponible: true },
    ];

    return (
        <div className="bibloteca-container">
            <section className="bibloteca-hero">
                <div className="hero-content">
                    <h1>Biblioteca Escolar</h1>
                    <p>Un espacio para el conocimiento y la investigación</p>
                </div>
            </section>

            <section className="normas-container">
                <h2>Normas de la Biblioteca</h2>
                <div className="normas-grid">
                    <div className="norma-card">
                        <div className="norma-icon">
                            <LuBook size={24} />
                        </div>
                        <h3>Préstamos de Libros</h3>
                        <p>Los préstamos tienen una duración de 7 días hábiles. Cada estudiante puede retirar hasta 2 libros simultáneamente presentando su credencial escolar.</p>
                    </div>
                    <div className="norma-card">
                        <div className="norma-icon">
                            <LuClock size={24} />
                        </div>
                        <h3>Horarios de Atención</h3>
                        <p>Lunes a Viernes de 8:00 a 17:00 hs. Durante los recreos la biblioteca permanece cerrada excepto para devoluciones rápidas.</p>
                    </div>
                    <div className="norma-card">
                        <div className="norma-icon">
                            <LuCalendarCheck size={24} />
                        </div>
                        <h3>Renovaciones</h3>
                        <p>Se puede renovar el préstamo por 7 días adicionales, siempre que no exista una reserva previa de otro estudiante. Máximo 2 renovaciones por libro.</p>
                    </div>
                </div>
            </section>

            <section className="catalogo-container">
                <h2>Catálogo de Libros</h2>
                <div className="filtros-catalogo">
                    <input type="text" placeholder="Buscar por título o autor" className="busqueda-input" />
                    <select className="categoria-select">
                        <option value="">Todas las categorías</option>
                        <option value="Educación">Educación</option>
                        <option value="Historia">Historia</option>
                        <option value="Ciencias">Ciencias</option>
                        <option value="Literatura">Literatura</option>
                        <option value="Informática">Informática</option>
                    </select>
                </div>
                <div className="libros-grid">
                    {libros.map(libro => (
                        <div key={libro.id} className={`libro-card ${!libro.disponible ? 'no-disponible' : ''}`}>
                            <div className="libro-icon">
                                <LuBookOpen size={32} />
                            </div>
                            <h3>{libro.titulo}</h3>
                            <p className="libro-autor">Autor: {libro.autor}</p>
                            <p className="libro-categoria">Categoría: {libro.categoria}</p>
                            <p className={`libro-estado ${libro.disponible ? 'disponible' : 'no-disponible'}`}>
                                {libro.disponible ? 'Disponible' : 'En préstamo'}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Bibloteca;