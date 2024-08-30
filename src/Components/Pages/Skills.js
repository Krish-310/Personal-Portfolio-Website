import React from 'react'
import '../../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import resume from '../../Assets/Documents/krish-resume.pdf'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Skills = () => {

  const createSkill = (name, percentage) => {
    return (
      <Col sm={2}>
        <div className='skill'>
          <Row>
            <div className='progressbar-container'>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
          </Row>
          <Row>
            <h3> {name} </h3>
          </Row>
        </div>
      </Col>
    )
  }

  return ( 
    <section className='skills-page'>
      <Container>
        <h1> My Technical Skills </h1>
        <Row className='toprow'>
            <div className="skills-container">
              <div className='information'>
                <h2> Languages </h2>
                <Row className='row-centered'>
                  {createSkill('C/C++', 95)}
                  {createSkill('Python', 95)}
                  {createSkill('Bash', 95)}
                  {createSkill('Javascript', 85)}
                  {createSkill('Go', 85)}
                  {createSkill('R', 80)}
                  {createSkill('Java', 75)}
                  {createSkill('Typescript', 70)}
                  {createSkill('SQL', 70)}
                </Row>
              </div>
            </div>
            <div className="skills-container">
              <div className='information'>
                <h2> Frameworks </h2>
                <Row className='row-centered'>
                  {createSkill('React', 95)}
                  {createSkill('Node.js', 95)}
                  {createSkill('Express.js', 85)}
                  {createSkill('MongoDB', 80)}
                  {createSkill('Bootstrap', 90)}
                  {createSkill('TailwindCSS', 85)}
                  {createSkill('Next.js', 70)}
                  {createSkill('GTest', 90)}
                </Row>
              </div>
            </div>
            <div className="skills-container">
              <div className='information'>
                <h2> Tools & Technologies </h2>
                <Row className='row-centered'>
                  {createSkill('Git', 95)}
                  {createSkill('Docker', 95)}
                  {createSkill('Jenkins', 95)}
                  {createSkill('Kubernetes', 85)}
                  {createSkill('Selenium', 70)}
                  {createSkill('gcov', 95)}
                  {createSkill('QEMU', 90)}
                  {createSkill('QNX', 85)}
                  {createSkill('Conan', 90)}
                  {createSkill('CMake', 95)}
                  {createSkill('Jupyter', 85)}
                  {createSkill('Colab', 90)}
                </Row>
              </div>
            </div>
            <div className="skills-container">
              <div className='information'>
                <h2> Libraries </h2>
                <Row className='row-centered'>
                  {createSkill('Pandas', 95)}
                  {createSkill('Numpy', 95)}
                  {createSkill('Matplotlib', 85)}
                  {createSkill('Scikit-Learn', 80)}
                  {createSkill('Seaborn', 75)}
                  {createSkill('OpenCV', 90)}
                  {createSkill('OpenVX', 85)}
                  {createSkill('Xlib', 90)}
                  {createSkill('Boost', 85)}
                </Row>
              </div>
            </div>
        </Row>
        <Row>
          <div className='resume'>
            <h5> Download my Resume over here! </h5>
            <div className='resume-button'>
              <a href={resume}
                  download="Krish's Resume (Aug 2024)"
                  target="_blank"
                  rel="noreferrer">
                <button type="button" className="btn btn-info btn-lg">
                  My Resume!
                </button>
              </a>
            </div>
            <p> Last updated: Aug 2024 </p>
          </div>
        </Row>
      </Container>
    </section>
  )
}
