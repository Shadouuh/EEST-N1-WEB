import React from 'react';
import './contacto.css';
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime, MdGroup, MdSchool, MdCalendarToday } from 'react-icons/md';

const Contacto = () => {
    return (
        <div className="contacto-page">
            {/* Hero Section */}
            <section className="contacto-hero">
                <div className="hero-content">
                    <h1>Contacto</h1>
                    <p>Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta o información adicional sobre nuestra institución educativa.</p>
                </div>
            </section>

            {/* Información de Contacto */}
            <section className="contacto-info-section">
                <div className="contacto-container">
                    <div className="contacto-grid">
                        {/* Información Principal */}
                        <div className="info-principal">
                            <h2>EEST N°1 Monte Grande</h2>
                            <p className="institucion-descripcion">
                                Escuela de Educación Secundaria Técnica con más de 35 años formando 
                                profesionales técnicos de excelencia en las especialidades de Informática y Programación.
                            </p>

                            <div className="info-cards-grid">
                                <div className="info-card">
                                    <div className="info-icon">
                                        <MdLocationOn size={24} stroke="white" />
                                    </div>
                                    <div className="info-details">
                                        <h3>Dirección</h3>
                                        <p>Av. San Martín 1234<br />Monte Grande, Buenos Aires<br />Argentina (1842)</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">
                                        <MdPhone size={24} stroke="white" />
                                    </div>
                                    <div className="info-details">
                                        <h3>Teléfonos</h3>
                                        <p>Secretaría: +54 11 4290-1234<br />Dirección: +54 11 4290-5678<br />Preceptoría: +54 11 4290-9012</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">
                                        <MdEmail size={24} stroke="white" />
                                    </div>
                                    <div className="info-details">
                                        <h3>Correos Electrónicos</h3>
                                        <p>info@eestn1mg.edu.ar<br />secretaria@eestn1mg.edu.ar<br />direccion@eestn1mg.edu.ar</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">
                                        <MdAccessTime size={24} stroke="white" />
                                    </div>
                                    <div className="info-details">
                                        <h3>Horarios de Atención</h3>
                                        <p>Lunes a Viernes: 7:30 - 17:30<br />Sábados: 8:00 - 12:00<br />Secretaría: 8:00 - 16:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mapa */}
                        <div className="mapa-section">
                            <div className="mapa-container">
                                <h3>Nuestra Ubicación</h3>
                                <div className="mapa-wrapper">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.8234567890123!2d-58.4678901234567!3d-34.8123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd1234567890a%3A0x1234567890abcdef!2sEEST%20N%C2%B01%20Monte%20Grande!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                                        width="100%"
                                        height="450"
                                        style={{ border: 0, borderRadius: '15px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Ubicación EEST N°1 Monte Grande"
                                    ></iframe>
                                </div>
                                <p className="mapa-descripcion">
                                    Nos encontramos en el corazón de Monte Grande, con fácil acceso 
                                    mediante transporte público y ubicación estratégica para estudiantes 
                                    de toda la zona sur del Gran Buenos Aires.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Información Adicional */}
            <section className="info-adicional">
                <div className="contacto-container">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon">
                                <MdCalendarToday size={32} stroke="white" />
                            </div>
                            <div className="stat-content">
                                <h3>Desde 1985</h3>
                                <p>Más de 35 años formando profesionales técnicos</p>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <MdGroup size={32} stroke="white" />
                            </div>
                            <div className="stat-content">
                                <h3>1200+ Estudiantes</h3>
                                <p>Alumnos activos en nuestras especialidades</p>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <MdSchool size={32} stroke="white" />
                            </div>
                            <div className="stat-content">
                                <h3>400+ Egresados</h3>
                                <p>Profesionales destacados en el mercado laboral</p>
                            </div>
                        </div>
                    </div>

                    <div className="contacto-cta">
                        <h2>¿Necesitas más información?</h2>
                        <p>No dudes en contactarnos. Nuestro equipo está disponible para resolver todas tus consultas sobre inscripciones, orientaciones, cursos y cualquier información que necesites sobre nuestra institución.</p>
                        <div className="cta-buttons">
                            <a href="tel:+541142901234" className="cta-btn primary">
                                <MdPhone size={20} stroke="white" />
                                Llamar Ahora
                            </a>
                            <a href="mailto:info@eestn1mg.edu.ar" className="cta-btn secondary">
                                <MdEmail size={20} stroke="white" />
                                Enviar Email
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contacto;