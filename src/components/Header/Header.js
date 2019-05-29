import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, NavDropdown, Container
} from 'react-bootstrap';

import './Header.scss';
import logo from '../../assets/site/logo.svg';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="header">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Game">
              <NavDropdown.Item as={Link} to="/plane">Plane</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={1} as={Link} to="/2">CV</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/3">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
