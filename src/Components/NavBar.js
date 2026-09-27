import React, { useEffect, useRef, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Github, Linkedin, Instagram, List, X, ChevronRight } from 'react-bootstrap-icons';
import Logo from '../Assets/Images/Krish_black_cat.png';

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navbar = useRef(null);
  const toggle = useRef(null);
  const closing = useRef(false);
  const pendingScroll = useRef(null);
  useEffect(() => {
    if (!expanded) return;
    const dismiss = () => {
      closing.current = true;
      setExpanded(false);
    };
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        dismiss();
        toggle.current?.focus();
      }
    };
    const onPointerDown = event => {
      if (!navbar.current?.contains(event.target)) dismiss();
    };
    const onFocusIn = event => {
      if (!navbar.current?.contains(event.target)) dismiss();
    };
    const desktop = window.matchMedia?.('(min-width: 992px)');
    const onResize = event => { if (event.matches) dismiss(); };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('focusin', onFocusIn);
    desktop?.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('focusin', onFocusIn);
      desktop?.removeEventListener('change', onResize);
    };
  }, [expanded]);
  const close = () => {
    closing.current = expanded;
    setExpanded(false);
  };
  const scrollToContact = element => {
    if (closing.current) pendingScroll.current = element;
    else element.scrollIntoView({ block: 'start' });
  };
  const finishClosing = () => {
    closing.current = false;
    pendingScroll.current?.scrollIntoView({ block: 'start' });
    pendingScroll.current = null;
  };
  return (
    <Navbar ref={navbar} expand="lg" expanded={expanded} onToggle={setExpanded} variant="dark" className="site-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={close} aria-label="Krish — home"><img className="logo-image" src={Logo} alt="Krish" width="180" height="48" /></Navbar.Brand>
        <Navbar.Toggle ref={toggle} aria-controls="main-navigation" label={expanded ? 'Close menu' : 'Open menu'} aria-expanded={expanded}>
          <span>{expanded ? 'Close' : 'Menu'}</span>{expanded ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
        </Navbar.Toggle>
        <Navbar.Collapse id="main-navigation" onExited={finishClosing}>
          <Nav className="main-nav">
            {[["/", "Home"], ["/skills", "Skills"], ["/projects", "Projects"], ["/career", "Career"], ["/about", "About Me"]].map(([to, label]) => (
              <Nav.Link key={to} as={NavLink} to={to} end={to === '/'} onClick={close}><span>{label}</span><span className="nav-current" aria-hidden="true">Current</span><ChevronRight className="nav-chevron" aria-hidden="true" /></Nav.Link>
            ))}
          </Nav>
          <div className="nav-extras">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/krish310/" aria-label="LinkedIn"><Linkedin /></a>
              <a href="https://www.instagram.com/krishy_310/" aria-label="Instagram"><Instagram /></a>
              <a href="https://github.com/Krish-310" aria-label="GitHub"><Github /></a>
            </div>
            <HashLink className="button button-secondary nav-connect" to="/#connect" onClick={close} scroll={scrollToContact}>Let's connect <span aria-hidden="true">↗</span></HashLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
