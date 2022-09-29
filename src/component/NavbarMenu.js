import React from 'react'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import logo from "../../src/assets/logo.png"

import Nav from 'react-bootstrap/Nav';


export const NavbarMenu = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} className="navbarlogo" alt="navbarlogo"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav.Link   className="navlinks" href="#deets">
         Post Ad
          </Nav.Link>
            <Nav.Link className="navlinks" >
              Near Me
            </Nav.Link>
            <Nav.Link className="navlinks">
              Login/SignUp
            </Nav.Link>
          
        </Navbar.Collapse>

      </Container>
    </Navbar>
   
       
    </>
  )
}
