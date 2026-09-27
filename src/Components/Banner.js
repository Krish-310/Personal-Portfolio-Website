import React from 'react';
import { Container } from 'react-bootstrap';
import { ArrowRight, ArrowUpRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import cat from '../Assets/Images/footer_cat.png';
import resume from '../Assets/Documents/krish-resume.pdf';
import { Typewriter } from './Typewriter';

export const Banner = () => (
  <section className="banner" id="home">
    <Container className="hero-grid">
      <div className="hero-copy">
        <h1>Hi, I'm Krish<span className="accent">.</span></h1>
        <Typewriter />
        <p>I study Computer Science at the University of Waterloo.</p>
        <p className="hero-note">I've worked on AI infrastructure at Atlassian, robot fleets at OTTO, and privacy research at Waterloo.</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/projects">Projects <ArrowRight aria-hidden="true" /></Link>
          <a className="button button-secondary" href={resume} target="_blank" rel="noreferrer">Résumé <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-art"><img src={cat} alt="A sleeping cat" width="240" height="240" /></div>
    </Container>
  </section>
);
