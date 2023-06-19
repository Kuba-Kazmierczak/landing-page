import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
			<Routes>
				<Route exact path='/' element={<Hero/>}></Route>
				<Route path='/skills' element={<Skills />}></Route>
				<Route path='/portfolio' element={<Portfolio />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
			</Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
