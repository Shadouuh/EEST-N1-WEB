import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './globals.css';
const App = () => {
  return(
    <div className="app-container">
      <Router>
      <header>

      </header>
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </main>
      <footer>
        
      </footer>
      </Router>
    </div>
  );
};
export default App;