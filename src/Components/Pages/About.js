import React from 'react'
import sapling from '../../Assets/Images/sapling.jpg'
import bulb from '../../Assets/Images/bulb.jpg'
import learn from '../../Assets/Images/learn.jpg'
import { Row, Col } from 'react-bootstrap'
import krish_img from '../../Assets/Images/krish_pic.jpeg'
import cat from '../../Assets/Images/footer_cat.png'

export const About = () => {
  return (
    <div className='about-page'>
      <div className='about-me'>
        <p>

          <h2> Hey, I'm Krish </h2> <br/>

          <div className='profile-pic-container'>
            <img alt='' src={krish_img} className='profile-pic'/>
          </div>

          <br/><br/>

          I'm a Co-op student studying Computer Science at the University of Waterloo, with a specialization in Artificial Intelligence. I am currently in
          my third year of undergrad(junior year).

          <br/><br/>

          <h3> A little bit about me </h3> <br/>

          I grew up in Singapore, then lived in India for a while, and am now in Canada. <br/>
          I love cats! They're adorable :) <br/><br/>

          <div className='cat-pic'>
            <img src={cat} alt=''/>
          </div>
          <br/>

          Fun Fact: I like the colour black (if you couldn't already tell XD) <br/>

          <br/> <br/>
          <h3> My Interests</h3> <br/>

          <div className='centred-list'>
            Software Engineering <br/>
            Systems Development <br/>
            Robotics <br/>
            Artificial Intelligence & Machine Learning <br/>
            Cybersecurity <br/>
          </div>
          <br/>
          I'm also very excited about working in <b>Research</b> and am actively seeking <b>URAs</b> and other opportunities to learn more! <br/>


          <br/> <br/>
          <h3> My Hobbies & Interets </h3> <br/>

          <div className='centred-list'>
           Speedcubing <br/>
           Board Games <br/>
           Volleyball <br/>
           Pokemon <br/>
           Marvel <br/>
           TV Shows + Movies + Anime :P <br/>

          </div>

          <br/> <br/>
          <h3> My Core Values </h3> <br/>

          <Row className='values'>
            <Col sm={4} className='value-container'>
                <div className='value-card'>
                  <div className='value-image'>
                    <img src={sapling} alt=''/>
                  </div>
                  <div className='value-content'>
                    <h4>Sustainability</h4>
                    <p> is what I value above all. I am always thinking of new ways that we can work towards the UN SDGs.</p>
                  </div>
                </div>
            </Col>
            <Col sm={4} className='value-container'>
                <div className='value-card'>
                  <div className='value-image-bulb'>
                    <img src={bulb} alt=''/>
                  </div>
                  <div className='value-content'>
                    <h4>Innovation</h4>
                    <p>  is very important for any individual. New ideas and ways of thinking are what drives our world forward. </p>
                  </div>
                </div>
            </Col>
            <Col sm={4} className='value-container'>
                <div className='value-card'>
                  <div className='value-image-learn'>
                    <img src={learn} alt=''/>
                  </div>
                  <div className='value-content'>
                    <h4>Lifelong Learning </h4>
                    <p> always appealed to me as someone who loves to learn. Is responsible for my interest in research.  </p>
                  </div>
                </div> 
            </Col>
          </Row>


          <br/><br/>
          You can find me on my Social Media! <br/>
          Feel free to reach out anytime! I would love to talk! <br/>

          <br/>
        </p>
      </div>
    </div>
  )
}