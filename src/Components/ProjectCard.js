import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { ArrowUpRight } from 'react-bootstrap-icons';

export const ProjectCard = ({ project }) => (
  <article className="project-card">
    <HashLink className="project-image" to={`/projects#${project.id}`} aria-label={`Read about ${project.title}`}><img src={project.image} alt={`${project.title} screenshot`} loading="lazy" width="600" height="360" /></HashLink>
    <div className="project-body">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="project-stack">{project.tags.join(' · ')}</p>
      <div className="project-links"><HashLink to={`/projects#${project.id}`}>About the project <ArrowUpRight aria-hidden="true" /></HashLink></div>
    </div>
  </article>
);
