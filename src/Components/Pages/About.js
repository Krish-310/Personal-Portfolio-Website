import React from 'react'
import sapling from '../../Assets/Images/sapling.jpg'
import bulb from '../../Assets/Images/bulb.jpg'
import learn from '../../Assets/Images/learn.jpg'
import { Row, Col } from 'react-bootstrap'
import krish_img from '../../Assets/Images/Krish.jpg'
import cat from '../../Assets/Images/footer_cat.png'

export const About = () => {
  return (
    <div className='about-page'>
      <div className='about-me'>
        <p> 




          <h2> My name is Krish Kochar </h2> <br/>

          <img alt='' src={krish_img} className='profile-pic'/>

          <br/><br/>

          I'm a Co-op student studying Computer Science at the Univeristy of Waterloo. I am currently completing
          the second year of my undergrad education (Sophomore Year). 

          <br/><br/><br/>

          <h3> A little bit about me </h3> <br/>

          I grew up in Singapore, then lived in India for a while, and am now in Canada. <br/>
          I love cats! They're adorable :) <br/><br/>

          <div className='cat-pic'>
            <img src={cat} alt=''/>
          </div>
          <br/>

          Fun Fact: I like the colour black (if you couldn't already tell XD)

          <br/> <br/> <br/>
          <h3> My Interests</h3> <br/>

          <div className='centred-list'>
          - Research! (Very enthsiastic!) <br/>
          - Software Development (Proficient) <br/>
          - Full-Stack Development (Proficient) <br/>
          - Data Science & Machine Learning (Strong foundation) <br/>
          - Cybersecurity (Intermediate, willing to learn!) <br/>
          </div>
          <br/>
          My exploration into each of these fields has led to my interest in them only growing. <br/>
          I have experience in <b>Software and Full-Stack Development</b> and am further developing upon it. <br/>
          However, I also want to explore other fields before committing to the one I enjoy the most. <br/>
          For that reason, I'm exploring <b>Data Science and Cybersecurity </b> as options, and I love them so far. <br/>
          I am also very excited about working in <b>Research</b>. I'm actively seeking a <b>URA/URF</b> to learn more! < br/>
          

          <br/> <br/> <br/>
          <h3> My Other Hobbies </h3> <br/>

          <div className='centred-list'>
          - Speedcubing <br/>
          - Chess <br/>
          - Pool <br/>
          - Table Tennis  <br/>
          - Badminton <br/>
          - Reading <br/>
          - Binging Movies & Shows <br/>
          - Games <br/>
          </div>
          <br/>

          Some of my favourite works of fiction are Harry Potter, Percy Jackson, Marvel and Pokemon. 
          


          <br/> <br/> <br/>
          <h3> My Core Values </h3> <br/>

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



          {/* <br/> <br/> <br/>
          <h3> What I can do for you </h3> <br/>

          I am competent in Full-Stack Development as well as basic Software Development, so I could assist with any projects
          that you may be working on or need help with. I would love to work on any Freelance Web Development projects
          you may have. 
          <br/> <br/>
          I am currently working on learning more about AI/ML and Cybersecurity, but soon I would be able to
          help with those fields as well.  */}


          <br/><br/><br/><br/>
          You can find me on my Social Media! <br/>
          Feel free to reach out anytime! I would love to talk! <br/>

          <br/><br/>
        </p>
      </div>
    </div>
  )
}