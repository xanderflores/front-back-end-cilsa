import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './pages/Principal/Principal';
import CursosClasesP from './pages/CursosClasesP/CursosClasesP';
import Foro from './pages/Foro/Foro';
import BlogForo from './pages/BlogForo/BlogForo';
import Alumnos from './pages/Alumnos/Alumnos';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Panel from './pages/Panel/Panel';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
        <Routes>
          <Route path="/" element={<Principal/>} />
          <Route path="/CursosClasesP" element={<CursosClasesP/>} />
          <Route path="/Alumnos" element={<Alumnos/>} />
          <Route path="/BlogForo" element={<BlogForo/>} />
          <Route path="/Foro" element={<Foro/>} />
          <Route path='/Panel' element={<Panel/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
