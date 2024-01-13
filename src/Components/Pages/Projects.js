import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import portfolio_img from '../../Assets/Images/portfolio.png';
import giphygram from '../../Assets/Images/giphygram.png';
import finvest_advsior from '../../Assets/Images/finvestadvisor.png';
import raiinet from '../../Assets/Images/raiinet.png';
import pycc1 from '../../Assets/Images/pycc1.png';
import bookstore from '../../Assets/Images/bookdraft.png';

export const Projects = () => {


  return (
    <section className='projects-page'>
      <Container>
        <h1> My Projects </h1>
        <Row className='project-row'>
          <Col sm={6}>
            <div className="project-container">
              <div className="thecard">
                <div className='project-front'>
                  <article className='portolio-item'>
                    <div className='portfolio-item-image'>
                      <div className='image-wrap'>
                        <img className='p-image' src={portfolio_img} alt=""/>
                        <p className='portfolio-item-desc'> ReactJS, CSS, Bootstrap, <br/> NodeJS, Express.js </p>
                      </div>
                    </div>
                    <h3> Personal Portfolio Website </h3>
                    <div className='portfolio-item-btns'>
                      <a href='https://github.com/Krish-310/Personal-Portfolio-Website' className='btn btn-outline-dark' target='_blank'> Github </a>
                      <a href='https://krish-personal-website.web.app/' className='btn btn-outline-primary' target='_blank'> Project </a>
                    </div>
                  </article>
                </div> 
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className="project-container">
              <div className="thecard">
                <div className='project-front'>
                  <article className='portolio-item'>
                    <div className='portfolio-item-image'>
                    <div className='image-wrap'>
                        <img className='p-image' src={finvest_advsior} alt=""/>
                        <p className='portfolio-item-desc'> Hello! </p>
                      </div>
                    </div>
                    <h3> Finvest Advisor </h3>
                    <div className='portfolio-item-btns'>
                      <a href='https://github.com/Krish-310/Finvest-Advisor-HTV8' className='btn btn-outline-dark' target='_blank'> Github </a>
                      <a href='https://finvestadvisor.streamlit.app/' className='btn btn-outline-primary' target='_blank'> Project </a>
                    </div>
                  </article>
                </div> 
              </div>
            </div>
          </Col>
        </Row>
        <Row className='project-row'>
          <Col sm={6}>
            <div className="project-container">
              <div className="thecard">
                <div className='project-front'>
                  <article className='portolio-item'>
                    <div className='portfolio-item-image'>
                    <div className='image-wrap'>
                        <img className='p-image' src={raiinet} alt=""/>
                        <p className='portfolio-item-desc'> Hello! </p>
                      </div>
                    </div>
                    <h3> RAIInet </h3>
                    <div className='portfolio-item-btns'>
                    <a href='https://github.com/Krish-310/RAIInet-public' className='btn btn-outline-dark' target="_blank"> Github </a>
                      {/* <a href='https://krish-personal-website.web.app/' className='btn btn-outline-primary' target='_blank'> Project </a> */}
                      {/* <a href='/projects/'
                        onClick={(e) => alert("Sorry, this project is private. A demo will be up soon though!")} 
                          className='btn btn-outline-dark' target='_blank'> Github </a> */}
                    </div>
                  </article>
                </div> 
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className="project-container">
              <div className="thecard">
                <div className='project-front'>
                  <article className='portolio-item'>
                    <div className='portfolio-item-image'>
                    <div className='image-wrap'>
                        <img className='p-image' src={bookstore} alt=""/>
                        <p className='portfolio-item-desc'> Hello! </p>
                      </div>
                    </div>
                    <h3> Used Book Store </h3>
                    <div className='portfolio-item-btns'>
                      <a href='https://github.com/Krish-310/Used-Book-Store' className='btn btn-outline-dark' target='_blank'> Github </a>
                      {/* <a href='https://krish-personal-website.web.app/' className='btn btn-outline-primary' target='_blank'> Project </a> */}
                    </div>
                  </article>
                </div> 
              </div>
            </div>
          </Col>
        </Row>
        <Row className='project-row'>
          <Col sm={6}>
            <div className="project-container">
              <div className="thecard">
                <div className='project-front'>
                  <article className='portolio-item'>
                    <div className='portfolio-item-image'>
                    <div className='image-wrap'>
                        <img className='p-image' src={pycc1} alt=""/>
                        <p className='portfolio-item-desc'> Python, APIs, Tkinter </p>
                      </div>
                    </div>
                    <h3> Python Currency Converter </h3>
                    <div className='portfolio-item-btns'>
                      <a href='https://github.com/Krish-310/Python-Currency-Converter' className='btn btn-outline-dark' target='_blank'> Github </a>
                    </div>
                  </article>
                </div> 
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className="project-container">
              <div className="thecard">
                <div className='project-front'>
                  <article className='portolio-item'>
                    <div className='portfolio-item-image'>
                    <div className='image-wrap'>
                        <img className='p-image' src={giphygram} alt=""/>
                        <p className='portfolio-item-desc'> Javascript, PWA </p>
                      </div>
                    </div>
                    <h3> Giphygram PWA </h3>
                    <div className='portfolio-item-btns'>
                      <a href='https://github.com/Krish-310/Giphygram-Project' className='btn btn-outline-dark' target='_blank'> Github </a>
                      <a href='https://krish-310.github.io/Giphygram-Project/' className='btn btn-outline-primary' target='_blank'> Project </a>
                    </div>
                  </article>  
                </div> 
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}