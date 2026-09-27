import React from 'react';
import { Container } from 'react-bootstrap';
import { ArrowUpRight } from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';

const groups = [
  { title: 'Systems & robotics', tools: ['C', 'C++', 'Rust', 'ROS2', 'OpenCV', 'OpenVX', 'Valgrind', 'Gcov'], example: 'Robot fleet interoperability', link: '/career#otto' },
  { title: 'Backend & distributed systems', tools: ['Go', 'Java', 'Kotlin', 'TypeScript', 'Python', 'Scala', 'FastAPI', 'Redis', 'DynamoDB', 'SQS'], example: 'Resource attribution for Rovo', link: '/career#atlassian' },
  { title: 'Infrastructure & observability', tools: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Bash', 'Datadog', 'Splunk'], example: 'Production debugging & incident response', link: '/career#super' },
  { title: 'Data & machine learning', tools: ['SQL', 'Spark', 'PyTorch', 'Python', 'Pandas', 'NumPy', 'scikit-learn'], example: 'Synthetic data privacy research', link: '/career#vector-research' },
];

export const Skills = () => (
  <section className="page-section skills-page"><Container>
    <header className="page-heading"><h1>Skills</h1><p>Languages and tools I've used, with examples of where I've used them.</p></header>
    <div className="skill-index">{groups.map(group => <section className="skill-row" key={group.title}><h2>{group.title}</h2><div><ul className="skill-tools">{group.tools.map(tool => <li key={tool}>{tool}</li>)}</ul><HashLink className="text-link" to={group.link}>{group.example} <ArrowUpRight aria-hidden="true" /></HashLink></div></section>)}</div>
  </Container></section>
);
