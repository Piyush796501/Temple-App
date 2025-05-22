import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';


function App() {
  return (
   <Router>
    
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<About />} />
    <Route path="/about" element={<About />} />
    <Route path="/about/mandir" element={<Home />} />
    <Route path="/about/aashram" element={<About />} />
    </Routes>
  </Router>
  );
}

export default App;
