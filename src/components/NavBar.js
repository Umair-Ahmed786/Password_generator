import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark fixed-top  navbar-dark">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            NewsGorilla
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                <b>Home</b>
              </Nav.Link>
              <Nav.Link as={Link} to="/business">
                Business
              </Nav.Link>
              <Nav.Link as={Link} to="/entertainment">
                Entertainment
              </Nav.Link>
              <Nav.Link as={Link} to="/general">
                General
              </Nav.Link>
              <Nav.Link as={Link} to="/health">
                Health
              </Nav.Link>
              <Nav.Link as={Link} to="/science">
                Science
              </Nav.Link>
              <Nav.Link as={Link} to="/sports">
                Sports
              </Nav.Link>
              <Nav.Link as={Link} to="/technology">
                Technology
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
