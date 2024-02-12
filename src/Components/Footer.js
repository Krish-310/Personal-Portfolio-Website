import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import cat from '../Assets/Images/footer_cat.png'
import logo from '../Assets/Images/Krish_black_cat.png'
import navIcon1 from '../Assets/Images/nav-icon1.svg'
import discord from '../Assets/Images/discord-mark-white.svg'
import instagram from '../Assets/Images/insta.svg'
import github from '../Assets/Images/github-mark-white.svg'

export const Footer = () => {
  return (
        <footer className='footer'>
            <script src="https://kit.fontawesome.com/597e5024dc.js" crossOrigin="anonymous"></script>
            <Container>
                <Row className="align-items-center">
                    <Col sm={3}>
                        <div className='cat'>
                            <img src={cat} alt=''/>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='logo'>
                            <a href='/#home'>  <img src={logo} alt=''/> </a>
                        </div>
                        <div className='wrapping'>
                        <div className='social-icon icon-footer'>
                            <a href='http://www.linkedin.com/in/krish310/'> <img src={navIcon1} alt=''/> </a>
                            <a href='#>' onClick={(e) => alert("AHA! I'm not giving you my Discord! Have a nice day :)")}> <img src={discord} alt=''/> </a>
                            <a href='https://www.instagram.com/krishy_310/'> <img src={instagram} alt=''/> </a>
                            <a href='https://github.com/Krish-310'> <img src={github} alt=''/> </a>
                        </div>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className='footer-text'>
                        <p className='text'> Thanks for visiting my website! <br/>
                            Last updated Feb 2024 <br/>
                            Images sourced from <a href='https://www.vecteezy.com/'> vecteezy.com </a> <br/>
                            &#169; Copyright 2023. All Rights Reserved. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
  )
}