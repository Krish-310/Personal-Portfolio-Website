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
                  {createSkill('C++', 100)}
                  {createSkill('Python', 100)}
                  {createSkill('C', 95)}
                  {createSkill('Bash', 100)}
                  {createSkill('Go', 85)}
                  {createSkill('R', 80)}
                  {createSkill('SQL', 75)}
                  {createSkill('Javascript', 70)}
                  {createSkill('Typescript', 60)}
                </Row>
              </div>
            </div>
            <div className="skills-container">
              <div className='information'>
                <h2> Frameworks </h2>
                <Row className='row-centered'>
                  {createSkill('ROS2', 95)}
                  {createSkill('Node.js', 90)}
                  {createSkill('Express.js', 90)}
                  {createSkill('React', 80)}
                  {createSkill('MongoDB', 80)}
                  {createSkill('Bootstrap', 90)}
                  {createSkill('TailwindCSS', 80)}
                  {createSkill('Next.js', 60)}
                  {createSkill('GTest', 95)}
                </Row>
              </div>
            </div>
            <div className="skills-container">
              <div className='information'>
                <h2> Tools & Technologies </h2>
                <Row className='row-centered'>
                  {createSkill('Git', 100)}
                  {createSkill('Docker', 100)}
                  {createSkill('Kubernetes', 100)}
                  {createSkill('Jenkins', 100)}
                  {createSkill('Sonarqube', 100)}
                  {/* {createSkill('gcov', 95)} */}
                  {createSkill('QEMU', 90)}
                  {createSkill('QNX', 80)}
                  {createSkill('GCP', 70)}
                  {/* {createSkill('Conan', 90)}
                  {createSkill('CMake', 95)}
                  {createSkill('Jupyter', 85)}
                  {createSkill('Colab', 90)} */}
                </Row>
              </div>
            </div>
            <div className="skills-container">
              <div className='information'>
                <h2> Libraries </h2>
                <Row className='row-centered'>
                  {createSkill('Pandas', 100)}
                  {createSkill('Numpy', 100)}
                  {createSkill('Matplotlib', 100)}
                  {createSkill('Scikit-Learn', 80)}
                  {createSkill('Tensorflow', 90)}
                  {createSkill('Seaborn', 70)}
                  {createSkill('OpenCV', 90)}
                  {createSkill('OpenVX', 85)}
                  {createSkill('Xlib', 90)}
                  {createSkill('ncurses', 90)}
                  {createSkill('Boost', 85)}
                  {createSkill('YOLO', 70)}

                </Row>
              </div>
            </div>
        </Row>
        <Row>
          <div className='resume'>
            <h5> Download my Resume over here! </h5>
            <div className='resume-button'>
              <a href={resume}
                  download="Krish's Resume (Jan 2025)"
                  target="_blank"
                  rel="noreferrer">
                <button type="button" className="btn btn-info btn-lg">
                  My Resume!
                </button>
              </a>
            </div>
            <p> Last updated: Jan 2025 </p>
          </div>
        </Row>
      </Container>
    </section>
  )
}
