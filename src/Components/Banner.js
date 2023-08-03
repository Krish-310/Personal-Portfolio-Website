import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { useState, useEffect } from 'react'
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
import headImage from '../Assets/Images/coder_desk.png'

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const toRotate = ["a Programmer", "a Full-Stack Developer", "a Software Developer", "an AI Developer"]

    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
    // eslint-disable-next-line
      }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1.8)
        }
    
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(200)
        }
    }


  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'> Welcome to my Portfolio! </span>
                    <h1>{`Hi, My name is Krish`} <br/> 
                    <span>
                        <span className='wrap'> I'm {text} </span> 
                        <span className='wrap blinking-cursor'> | </span>
                    </span>
                    </h1>
                    <p> I'm a Computer Science student at the University of Waterloo. I just finished my first Co-op term
                        and am about to start my second year of university. I enjoy programming and am exploring my interest in the
                        fields of Web Development, Software Development and Artificial Intelligence. Feel free to
                        get in touch with me anytime!
                    </p>
                    <button id='myButton' type='button' className="btn btn-dark" onClick={() => window.location='/#connect'}> 
                        <span> Let's Connect </span> <ArrowRightCircle size={25}/> 
                    </button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headImage} alt="Header Img"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}