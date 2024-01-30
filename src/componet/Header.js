import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand  id="role">
              Full Stack <span id="devRole">Developer</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  SoloRajez
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="menuList">
                    <Link to="/home" className="menuItem">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#action1" className="menuList">
                    <Link to="/about" className="menuItem">
                      About
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#action1" className="menuList">
                    <Link to="/resume" className="menuItem">
                      Resume
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#action1" className="menuList">
                    <Link to="/contact" className="menuItem">
                      Contact
                    </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
