import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Link from 'next/link'


function Header() {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/home" className="logo">
            Hello!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="sidenav-new-menu"
          >
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="close"
            />
            <Nav className="ms-auto">
              <Link href="/about" className="nav-link">
                About
              </Link>

              <Link href="/" className="nav-link">
                Home
              </Link>

              <Link href="/product/product"  replace={false} className="nav-link">
                Product
              </Link>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
