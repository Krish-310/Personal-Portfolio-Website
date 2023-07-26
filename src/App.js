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
          <Route path='/' element={<div className='home'><Home/></div>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/career' element={<Career/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

