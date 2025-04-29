import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BrandPage from './components/BrandPage';
import AboutPage from './components/About';
import NotFound from './components/NotFound';
import Collaboration from './components/Collaboration';
import UnderConstruction from './components/UnderConstruction'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brandpage" element={<BrandPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/construction" element={<UnderConstruction />} /> 
        {/* добавляешь другие пути */}

        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Router>
  );
}

export default App;
