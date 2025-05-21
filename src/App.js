import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';


function App() {
  return (
   <Router>
    <div>
    <Header />
    <Home />
    </div>
  </Router>
  );
}

export default App;
