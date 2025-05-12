import { useState } from 'react';
import { Link } from 'react-router-dom'
import './styles.css'

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav>
                <h2>EEST N°1</h2>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/cursos">Cursos</Link>
                    </li>
                    <li>
                        <Link to="/biblioteca">Biblioteca</Link>
                    </li>
                    <li>
                        <Link to="/olimpiadas">Olimpiadas</Link>
                    </li>
                    <li>
                        <Link to="/intensificacion">Intensificacion | Previas</Link>
                    </li>
                    <li>
                        <Link to="/novedades">Novedades</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
                <button className="previas-btn">
                    Rendir Previas
                </button>
                
                {/* Generar el Menu */}
                <div 
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            
            {/* Side menu */}
            <div className={`side-menu ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/cursos">Cursos</Link>
                    </li>
                    <li>
                        <Link to="/biblioteca">Biblioteca</Link>
                    </li>
                    <li>
                        <Link to="/olimpiadas">Olimpiadas</Link>
                    </li>
                    <li>
                        <Link to="/intensificacion">Intensificacion | Previas</Link>
                    </li>
                    <li>
                        <Link to="/novedades">Novedades</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>
            
            <div 
                className={`overlay ${isMenuOpen ? 'active' : ''}`} 
                onClick={toggleMenu}
            ></div>
        </>
    )
}

export default Navbar;