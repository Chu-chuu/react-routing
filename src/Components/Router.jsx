import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Router() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
      <LinkContainer to="/">
          <Navbar.Brand>Dummy Site</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/About">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Services">
            <Nav.Link>Services</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Router;
