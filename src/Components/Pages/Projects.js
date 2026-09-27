import React from 'react';
import { Container } from 'react-bootstrap';
import { Github, ArrowUpRight } from 'react-bootstrap-icons';
import { projects } from '../../data/projects';
import { ProjectScreenshot } from '../ProjectScreenshot';

export const Projects = () => (
  <section className="page-section projects-page">
    <Container>
      <header className="page-heading"><h1>Projects</h1></header>
      <div className="project-studies">{projects.filter(project => project.featured).map(project => (
        <article className="project-study" id={project.id} key={project.id} aria-labelledby={`${project.id}-title`}>
          <div className="study-images">
            <ProjectScreenshot src={project.image} alt={`${project.title} screenshot`} />
            {project.secondaryImage && <ProjectScreenshot className="secondary-screenshot" src={project.secondaryImage} alt={`${project.title} terminal interface`} />}
          </div>
          <div className="study-copy">
            <h2 id={`${project.id}-title`}>{project.title}</h2><p className="study-description">{project.description}</p>
            {project.notes.map(note => <div className="project-note" key={note.title}><h3>{note.title}</h3><p>{note.text}</p></div>)}
            <p className="study-stack">{project.tags.join(' · ')}</p>
            <a className="text-link" href={project.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" />{project.sourceLabel || 'Source on GitHub'} <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </article>
      ))}</div>
      <section className="earlier-projects" aria-labelledby="earlier-heading">
        <h2 id="earlier-heading">Earlier projects</h2>
        <ul className="project-archive">{projects.filter(project => !project.featured).map(project => <li key={project.id}><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="archive-links"><a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>GitHub <ArrowUpRight aria-hidden="true" /></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>Demo <ArrowUpRight aria-hidden="true" /></a>}</div></li>)}</ul>
      </section>
    </Container>
  </section>
);
