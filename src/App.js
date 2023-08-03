import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar.js';
import { Home } from './Components/Pages/Home.js'
import { Skills } from './Components/Pages/Skills.js'
import { Projects } from './Components/Pages/Projects.js'
import { Career } from './Components/Pages/Career.js'
import { About } from './Components/Pages/About.js'
import { Footer } from './Components/Footer.js'


function App() {
  return (
    <div>
      <NavBar />
      <div className='container-fluid'>
        <Routes>
          <Route path='/Personal-Portfolio-Website/' element={<div className='home'><Home/></div>} />
          <Route path='/Personal-Portfolio-Website/skills' element={<Skills/>} />
          <Route path='/Personal-Portfolio-Website/projects' element={<Projects/>} />
          <Route path='/Personal-Portfolio-Website/career' element={<Career/>} />
          <Route path='/Personal-Portfolio-Website/about' element={<About/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

