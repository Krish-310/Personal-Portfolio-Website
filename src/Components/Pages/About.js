import React from 'react'
import sapling from '../../Assets/Images/sapling.jpg'
import bulb from '../../Assets/Images/bulb.jpg'
import learn from '../../Assets/Images/learn.jpg'
import { Row, Col } from 'react-bootstrap'

export const About = () => {
  return (
    <div className='about-page'>
      <div className='about-me'>
        <p> 
          <h2> Hi! </h2> <br/>
          My name is Krish Kochar, and I am a student starting his second year at the University of Waterloo.
          I'm majoring in Computer Science and am enrolled in the Co-op programme. 

          <br/><br/>
          
          I was born in Singapore and grew up over there. At the age of 16, my family and I moved to India
          where I spent the next few years. In 2022, I graduated from high school and moved to Canada to 
          start my university education at the University of Waterloo. 

          <br/> <br/> <br/>
          <h3> My Interests</h3> <br/>

          <div className='centred-list'>
          - Software Development <br/>
          - Full-Stack Development <br/>
          - Artificial Intelligence and Machine Learning <br/>
          - Cybersecurity <br/>
          </div>
          <br/>
          I have recently been exploring all of these areas, and very much look forward to exploring many other such areas in 
          the future. Once I get a grasp on each of these fields, I will be able to decide what I want to 
          specialize in. 

          <br/> <br/> <br/>
          <h3> My Hobbies </h3> <br/>

          I am an avid speedcuber and I enjoy playing Chess. <br/>
          I'm not the best at sports, but I love playing badminton and table tennis every now and then. <br/>
          <br/>
          Not to mention, I also love reading books as well as watching movies and TV Series. Some of my favourites
          are Harry Potter, Percy Jackson, and Marvel. 
          <br/> <br/>
          I also love cats :)

          <br/> <br/> <br/>
          <h3> My Values </h3> <br/>

          <Row className='values'>
            <Col sm={4} className='value-container'>
                <div className='value-card'>
                  <div className='value-image'>
                    <img src={sapling} alt=''/>
                  </div>
                  <div className='value-content'>
                    <h4>Sustainability</h4>
                    <p> I value sustainability above all and am always thinking of new ways that we can work towards the UN SDGs.
                      </p>
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
                    <p>  Is very important for any individual. New ideas and ways of thinking are what drives our world forward. </p>
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
                    <p> Always appealed to me as someone who loves to learn. Is responsible for my interest in research.  </p>
                  </div>
                </div> 
            </Col>
          </Row>



          <br/> <br/> <br/>
          <h3> What I can do for you </h3> <br/>

          I am competent in Full-Stack Development as well as basic Software Development, so I could assist with any projects
          that you may be working on or need help with. I would love to work on any Freelance Web Development projects
          you may have. 
          <br/> <br/>
          I am currently working on learning more about AI/ML and Cybersecurity, but soon I would be able to
          help with those fields as well. 


          <br/><br/><br/><br/><br/><br/>
          You can find me on Social Media!

          <br/><br/>
          Thanks for visiting my website! Have a nice day!
        </p>
      </div>
    </div>
  )
}