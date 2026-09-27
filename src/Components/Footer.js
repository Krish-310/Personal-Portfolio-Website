import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram } from 'react-bootstrap-icons';
import cat from '../Assets/Images/footer_cat.png';

export const Footer = () => (
  <footer className="footer"><Container>
    <div className="footer-main">
      <Link to="/" className="footer-brand" aria-label="Krish — home"><img src={cat} alt="" width="96" height="96" loading="lazy" /><div><span>Krish Kochar</span></div></Link>
      <div className="footer-links"><div className="social-icon"><a href="https://www.linkedin.com/in/krish310/" aria-label="LinkedIn"><Linkedin /></a><a href="https://www.instagram.com/krishy_310/" aria-label="Instagram"><Instagram /></a><a href="https://github.com/Krish-310" aria-label="GitHub"><Github /></a></div>
        <div className="webring" aria-label="University of Waterloo CS webring"><a href="https://cs.uwatering.com/#https://krishkochar.com?nav=prev" aria-label="Previous webring site">←</a><a href="https://cs.uwatering.com/#https://krishkochar.com" target="_blank" rel="noreferrer">CS Webring</a><a href="https://cs.uwatering.com/#https://krishkochar.com?nav=next" aria-label="Next webring site">→</a></div>
      </div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Krish Kochar</span><span>Illustrations from <a href="https://www.vecteezy.com/">Vecteezy</a></span></div>
  </Container></footer>
);
