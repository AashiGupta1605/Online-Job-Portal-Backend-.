import React, {useState} from 'react'
import {Container, Navbar, Nav,Button, Modal} from 'react-bootstrap';
import logo from '../Images/logo.png';
import './style/Header.css';
// import './style/Modal.css'
import LoginComp from './User/LoginComp'

const Header = () => {
  const [login, setlogin] = useState(false);
  const [JobPost, setJobPost] = useState(false);
  const loginClose = () => setlogin(false);
  const loginShow = () => setlogin(true);
  const JobPostClose = () => setJobPost(false);
  const JobPostShow = () => setJobPost(true);
 
  return (
    <>
    <Navbar expand="lg" variant="dark" className="color-nav1" >
      <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="150"
              height="70"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          </Container>
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/jobs">Jobs</Nav.Link>
            <Nav.Link href="/companies">Companies</Nav.Link>
            <Nav.Link href="/Blogs">Blogs</Nav.Link>
            <Nav.Link href="/Pricing">Pricing</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <Navbar sticky="top" className="color-nav2" >
     <Container>
     <Navbar.Brand href="#home"></Navbar.Brand>
     <Navbar.Collapse className="justify-content-end">
      <Button onClick={loginShow} className='button'>
        Login/Register
      </Button>&nbsp;&nbsp;&nbsp;
      <Button variant="warning" onClick={JobPostShow}>
        Post a Job
      </Button>
      <Modal show={login} onHide={loginClose}>
        <Modal.Header closeButton>
          <Modal.Title>login</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#9A616D"}}>
          <div>
            <LoginComp/>
          </div>
        </Modal.Body>
      
        {/* const loginClose=()=> setlogin(false); */}
      </Modal>
      
      <Modal show={JobPost} onHide={JobPostClose}>
        <Modal.Header closeButton>
          <Modal.Title>job post</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
      </Modal>
      </Navbar.Collapse>
      </Container>
      </Navbar>
    </>
  )
}

export default Header

