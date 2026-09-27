import React from 'react';
import { experience } from '../../data/experience';

export const Career = () => (
  <section className="career-page page-section">
    <div className="container">
      <header className="page-heading">
        <h1>Work & research</h1>
      </header>
      <div className="main-timeline">
        {experience.map(item => (
          <article className="timeline" id={item.id} key={item.id}>
            <div className="icon" aria-hidden="true" />
            <div className="date-content">
              <div className="date-outer"><span className="date"><span className="month">{item.period}</span><span className="year">{item.year}</span></span></div>
            </div>
            <div className="timeline-content">
              <h2 className="title">{item.role} @ {item.company}</h2>
              <div className="description">
                {item.team && <p className="experience-role">{item.team}</p>}
                <p>{item.summary}</p>
                {item.story && <div className="experience-story"><h3>{item.story.title}</h3><p>{item.story.text}</p></div>}
                {item.highlights.length > 0 && <ul>{item.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
