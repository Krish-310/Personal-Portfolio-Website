import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ArrowRight } from 'react-bootstrap-icons';
import { Banner } from '../Banner';
import { Contact } from '../Contact';
import { ProjectCard } from '../ProjectCard';
import { projects } from '../../data/projects';

export const Home = () => (
  <>
    <Banner />
    <section className="home-section selected-work" aria-labelledby="selected-heading">
      <Container>
        <div className="section-heading"><h2 id="selected-heading">Projects</h2><Link className="text-link" to="/projects">All projects <ArrowRight aria-hidden="true" /></Link></div>
        <div className="project-grid featured-grid">{projects.filter(project => project.featured).map(project => <ProjectCard key={project.id} project={project} />)}</div>
      </Container>
    </section>
    <section className="home-section work-note" aria-labelledby="work-note-heading">
      <Container className="work-note-grid">
        <div><h2 id="work-note-heading">A bug worth finding.</h2><p className="note-context">Atlassian · Summer 2026</p><HashLink className="text-link" to="/career#atlassian">Work & research <ArrowRight aria-hidden="true" /></HashLink></div>
        <div><p className="lead-copy">At Atlassian, I traced six million SQS calls every fifteen minutes to an abandoned workflow that had been left enabled for over a year.</p><p>I found it using the resource-attribution tooling I'd built for Rovo's connector platform. Turning off the stale feature flag stopped about $160 a day in wasted staging spend.</p></div>
      </Container>
    </section>
    <Contact />
  </>
);
