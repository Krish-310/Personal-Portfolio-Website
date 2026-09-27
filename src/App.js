import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Pages/Home';
import { Skills } from './Components/Pages/Skills';
import { Projects } from './Components/Pages/Projects';
import { Career } from './Components/Pages/Career';
import { About } from './Components/Pages/About';
import { Footer } from './Components/Footer';

const titles = { '/': 'Systems, robotics & privacy', '/skills': 'Skills', '/projects': 'Projects', '/career': 'Career', '/about': 'About me' };

function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = `Krish Kochar — ${titles[pathname] || 'Page not found'}`;
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <NavBar />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<section className="page-section container"><h1>Page not found</h1><p>This address does not match a page on the site.</p><Link className="button button-primary" to="/">Back home</Link></section>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
