import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Hero />
        <Skills />
        <Portfolio />
        <Contact />
    </BrowserRouter>
      
    
  );
}

export default App;
