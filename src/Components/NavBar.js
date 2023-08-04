import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import navIcon1 from '../Assets/Images/nav-icon1.svg'
import Logo from '../Assets/Images/Krish_black_cat.png'
import instagram from '../Assets/Images/insta.svg'
import { HashLink } from 'react-router-hash-link';
import github from '../Assets/Images/github-mark-white.svg'


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect( () => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }


    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled': ''}>
        <Container>
                <Navbar.Brand href="/Personal-Portfolio-Website/">
                        <img className="logo-image" src={Logo} alt="Logo" />
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className='navbar-toggler-icon'> </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/Personal-Portfolio-Website/" className={activeLink === 'home' ? 'active-navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')} > Home </Nav.Link>
                <Nav.Link href="/Personal-Portfolio-Website/skills"className={activeLink === 'skills' ? 'active-navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} > Skills </Nav.Link>
                <Nav.Link href="/Personal-Portfolio-Website/projects" className={activeLink === 'projects' ? 'active-navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} > Projects </Nav.Link>
                <Nav.Link href="/Personal-Portfolio-Website/career" className={activeLink === 'career' ? 'active-navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('career')} > Career </Nav.Link>
                <Nav.Link href="/Personal-Portfolio-Website/about" className={activeLink === 'about-me' ? 'active-navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('about-me')} > About Me </Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='http://www.linkedin.com/in/krish310/'> <img src={navIcon1} alt=''/> </a>
                    <a href='https://www.instagram.com/krishy_310/'> <img src={instagram} alt=''/> </a>
                    <a href='https://github.com/Krish-310'> <img src={github} alt=''/> </a>
                </div>
                    <HashLink to='/#connect'>
                    <button className='vvd' onClick={() => console.log("connect")}> 
                        <span> Let's Connect </span> 
                    </button>
                    </HashLink>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}