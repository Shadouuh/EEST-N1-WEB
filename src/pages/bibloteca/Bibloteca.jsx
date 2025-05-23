import React from 'react';
import './styles.css';
import { LuBook, LuClock, LuCalendarCheck, LuBookOpen, LuBanana, 
         LuUserCheck, LuLayoutGrid, LuPencil,
         LuUsers, LuBookmarkX} from 'react-icons/lu';

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
            <section className="section">
                <div className="header">
                    <h2>Horarios de <span>Atencion</span></h2>
                </div>
                <div className="horarios-container">
                    <div className="horario">
                        <div className="top">
                            <div className="feature-icon square">
                                <LuClock />
                            </div>
                            <p>Turno Mañana</p>
                        </div>
                        <p>Lunes - Viernes</p>
                        <h4>07:30 - 12:00</h4>
                    </div>
                    <div className="horario">
                        <div className="top">
                            <div className="feature-icon square">
                                <LuClock />
                            </div>
                            <p>Turno Tarde</p>
                        </div>
                        <p>Lunes - Viernes</p>
                        <h4>12:00 - 17:20</h4>
                    </div>

                </div>
            </section>
            <section className="section gray">
                <div className="header">
                    <h2>Pautas de <span>Convivencia</span></h2>
                    <p>Para el buen funcionamiento de nuestra Biblioteca</p>
                </div>
                <div className="pautas-container">
                    <div className="pauta-card">
                        <div className="pauta-icon">
                            <LuUsers />
                        </div>
                        <h3>Acceso a Biblioteca</h3>
                        <p>Toda la Comunidad Educativa tiene acceso libre gratuito</p>
                    </div>
                    
                    <div className="pauta-card">
                        <div className="pauta-icon">
                            <LuBanana />
                        </div>
                        <h3>No ingresar con alimentos</h3>
                        <p>Prohibido comer o beber dentro de la biblioteca</p>
                    </div>
                    
                    <div className="pauta-card">
                        <div className="pauta-icon">
                            <LuUserCheck />
                        </div>
                        <h3>Normas de Convivencia</h3>
                        <p>Practicar las normas de convivencia al ingresar</p>
                    </div>
                    
                    <div className="pauta-card">
                        <div className="pauta-icon">
                            <LuBookOpen />
                        </div>
                        <h3>Cuidar el material</h3>
                        <p>Solicitar y retirarlo una vez registrado</p>
                    </div>
                    
                    <div className="pauta-card">
                        <div className="pauta-icon">
                            <LuLayoutGrid />
                        </div>
                        <h3>Controlar el Material</h3>
                        <p>Los Materiales deben ser registrados y controlados en el aula</p>
                    </div>
                    
                    <div className="pauta-card">
                        <div className="pauta-icon">
                            <LuPencil />
                        </div>
                        <h3>No marcar los libros</h3>
                        <p>Prohibido subrayar o escribir en el material</p>
                    </div>
                    
                    <div className="pauta-card">
                        <div className="pauta-icon">
                            <LuClock />
                        </div>
                        <h3>Respetar los plazos</h3>
                        <p>El Plazo maximo es de 2 dias, presentando libreta.</p>
                    </div>
                    
                    <div className="pauta-card">
                        <div className="pauta-icon">
                            <LuBookmarkX />
                        </div>
                        <h3>Reportar daños</h3>
                        <p>Perdida, o Devolucion en mal estado, se sancionara por acta</p>
                    </div>
                </div>
            </section>
            <section>
                
            </section>

            <section className="ayuda-section">
                <div className="ayuda-content">
                    <h2>¿Necesitas ayuda con tu investigación?</h2>
                    <p>Nuestro personal bibliotecario está disponible para ayudarte a encontrar los recursos que necesitas</p>
                    <button className="contactar-btn">
                        Contactar a Biblioteca <span>›</span>
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Bibloteca;