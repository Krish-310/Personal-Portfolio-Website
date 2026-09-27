import React from 'react';
import { Container } from 'react-bootstrap';
import { ArrowUpRight } from 'react-bootstrap-icons';
import portrait from '../../Assets/Images/krish_pic.jpeg';
import cats from '../../Assets/Images/cats.png';

export const About = () => (
  <section className="page-section about-page"><Container>
    <div className="about-intro">
      <div><h1>About me</h1><p className="lead-copy">I grew up in Singapore, spent a few years in India, and moved to Canada for university.</p><p>I'm studying Computer Science at Waterloo, specializing in AI, and graduating in April 2027.</p><p>Outside work, I like speedcubing, board games, and volleyball. I also watch a lot of TV, movies, and anime, with Pokémon and Marvel in the mix.</p><a className="text-link" href="mailto:k2kochar@uwaterloo.ca">k2kochar@uwaterloo.ca <ArrowUpRight aria-hidden="true" /></a></div>
      <div className="portrait-wrap"><img src={portrait} alt="Krish Kochar" width="320" height="320" /><span>Singapore → India → Canada</span></div>
    </div>
    <section className="about-offline" aria-labelledby="outside-heading">
      <div><h2 id="outside-heading">Outside work</h2><dl className="personal-details"><div><dt>Speedcubing</dt><dd>My personal best is <strong>11.5 seconds.</strong></dd></div><div><dt>Board games</dt><dd>My favourite is probably <strong>Brass: Birmingham.</strong></dd></div><div><dt>This website</dt><dd>I built the original by hand a few years ago. Black is my favourite colour, and I love cats.</dd></div></dl></div>
      <img src={cats} alt="Three illustrated cats" width="230" height="235" loading="lazy" />
    </section>
  </Container></section>
);
