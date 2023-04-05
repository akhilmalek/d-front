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
            Design kit
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
              <InputGroup className="mb-0 pe-4 search-bar">
                <Form.Control
                  placeholder="Search.."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  <a href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-search"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </a>
                </InputGroup.Text>
              </InputGroup>
              <Link href="/about" className="nav-link">
                About
              </Link>

              <Link href="/" className="nav-link">
                Home
              </Link>
             
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
