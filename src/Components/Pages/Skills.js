import React from 'react'
import '../../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import resume from '../../Assets/Documents/krish_resume_july.pdf'

export const Skills = () => {
  return (
    <section className='skills-page'>

      <Container>
      <h1> My Technical Skills </h1>
        <Row className='toprow'>
          <Col sm={4}>
          <div className="maincontainer">
            <div className="thecard">
              <div className="thefront">
                <h3> Web Development </h3>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    HTML
                    <span className="badge bg-dark rounded-pill">95%</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    CSS
                    <span className="badge bg-dark rounded-pill">75%</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Javascript
                    <span className="badge bg-dark rounded-pill">80%</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Bootstrap
                    <span className="badge bg-dark rounded-pill">90%</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    React
                    <span className="badge bg-dark rounded-pill">80%</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    NodeJS
                    <span className="badge bg-dark rounded-pill">50%</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Express
                    <span className="badge bg-dark rounded-pill">40%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </Col>
          <Col sm={4}>
            <div className="maincontainer">
              <div className="thecard">
                <div className="thefront">
                  <h3> Software Development </h3>
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Python
                      <span className="badge bg-dark rounded-pill">90%</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      C
                      <span className="badge bg-dark rounded-pill">90%</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      C++
                      <span className="badge bg-dark rounded-pill">70%</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Golang
                      <span className="badge bg-dark rounded-pill">90%</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Javascript
                      <span className="badge bg-dark rounded-pill">80%</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      R
                      <span className="badge bg-dark rounded-pill">50%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="maincontainer">
              <div className="thecard">
                <div className="thefront">
                  <h3> Data Science & ML </h3>
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Python
                      <span className="badge bg-dark rounded-pill">90%</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      R
                      <span className="badge bg-dark rounded-pill">50%</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Colab
                      <span className="badge bg-dark rounded-pill">60%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='gaprow'>
        <div className="bottomcontainer">
              <div className="widecard">
                <div className="thefront">
                  <h3> Tools and Technologies </h3>
                  <Row className='smallrow'>
                  <Col sm={4}>
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Linux
                        <span className="badge bg-dark rounded-pill">90%</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        JIRA
                        <span className="badge bg-dark rounded-pill">80%</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Docker
                        <span className="badge bg-dark rounded-pill">70%</span>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={4}>
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Git
                        <span className="badge bg-dark rounded-pill">90%</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Confluence
                        <span className="badge bg-dark rounded-pill">70%</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        LaTeX
                        <span className="badge bg-dark rounded-pill">90%</span>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={4}>
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        ChatGPT
                        <span className="badge bg-dark rounded-pill">85%</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Unity (C#)
                        <span className="badge bg-dark rounded-pill">60%</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        VSCode
                        <span className="badge bg-dark rounded-pill">90%</span>
                      </li>
                    </ul>
                  </Col>
                  </Row>
                </div>
              </div>
            </div>
            </Row>
            <Row className='gaprow'>
              <div className='cc-container'>
                <div className='widecard'>
                  <div className='thefront'>
                    <h3> Courses and Certfications </h3>
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Go: The Complete Developer's Guide (Golang)
                        <span className="badge bg-dark rounded-pill">Udemy</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Core Java Made Easy (Latest Java 17)
                        <span className="badge bg-dark rounded-pill">Udemy</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        CS50’s Introduction to Artificial Intelligence
                        <span className="badge bg-dark rounded-pill">edX</span>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </Row>
            <Row className='gaprow'>
              <div className='softcontainer'>
                <div className='widecard'>
                  <div className='thefront'>
                    <h3> Soft Skills </h3>
                    <Row className='smallrow'>
                      <Col sm={4}>
                        <ul className="list-group">
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Leadership
                            <span className="badge bg-dark rounded-pill">90%</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Communication & Collaboration
                            <span className="badge bg-dark rounded-pill">90%</span>
                          </li>
                        </ul>
                      </Col>
                      <Col sm={4}>
                        <ul className="list-group">
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Project Management
                            <span className="badge bg-dark rounded-pill">80%</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Work Ethic & Detail Oriented
                            <span className="badge bg-dark rounded-pill">100%</span>
                          </li>
                        </ul>
                      </Col>
                      <Col sm={4}>
                        <ul className="list-group">
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Critical Thinker
                            <span className="badge bg-dark rounded-pill">100%</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Innovative
                            <span className="badge bg-dark rounded-pill">80%</span>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Row>
            <Row className='bottomrow'>
              <div className='resume'>
                <h5> Download my Resume by clicking this button! </h5>
                <div className='resume-button'>
                  <a href={resume}
                      download="Krish's Resume (July 2023)"
                      target="_blank"
                      rel="noreferrer">
                  
                    <button type="button" className="btn btn-primary">
                      My Resume!
                    </button>
                  </a>
                </div>
                <p> This is my resume as of July 2023</p>
              </div>
            </Row>
      </Container>


       
    </section>
  )
}
