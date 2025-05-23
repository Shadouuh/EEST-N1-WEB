// Dependencias
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LuFacebook } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
// Estilos
import './globals.css';
// Componentes | Paginas
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import Bibloteca from "./pages/bibloteca/Bibloteca.jsx";
import Cursos from "./pages/cursos/Cursos.jsx";
import Olimpiadas from "./pages/olimpiadas/Olimpiadas.jsx";
import Previas from "./pages/previas/Previas.jsx";
const App = () => {
  return(
    <div className="app-container">
      <Router>
      <header>
        <Navbar />
      </header>
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biblioteca" element={<Bibloteca />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/olimpiadas" element={<Olimpiadas />} />
            <Route path="/intensificacion" element={<Previas/>} />
          </Routes>
      </main>
      <footer>
        <div className="footer-top">
          <div className="footer-title">
            <h4>EEST N°1</h4>
            <p>Escuela de Educacion Secundaria Tecnica N°1</p>
          </div>
          <div className="footer-links">
              <div className="footer-link">
                <LuFacebook stroke="snow" size={14}/>
              </div>
              <div className="footer-link">
              <LuInstagram stroke="snow" size={14}/>
              </div>
              <div className="footer-link">
              <LuTwitter stroke="snow" size={14}/>
              </div>
          </div>
        </div>
        <div className="footer-bottom">
              <p>© 2025 Desarrollado por Lagoom</p>
        </div>
      </footer>
      </Router>
    </div>
  );
};
export default App;