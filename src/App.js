import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './pages/Principal/Principal';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Principal/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
