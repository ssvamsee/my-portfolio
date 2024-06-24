import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";

function NavBar({ showResume }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const handleResume = () => {
    updateExpanded(false)
    window.open('#resume', '_blank', 'noopener,noreferrer');
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <img src='Assets/logo.png' alt="brand" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => { updateExpanded(expand ? false : "expanded"); }}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {showResume ? (
              <>
                <Nav.Item>
                  <Nav.Link href="/" onClick={() => updateExpanded(false)}>
                    <AiOutlineHome style={{ marginBottom: "2px" }} />
                    Home
                  </Nav.Link>
                </Nav.Item>


                <Nav.Item>
                  <Nav.Link href="#resume" onClick={() => updateExpanded(false)}>
                    <CgFileDocument style={{ marginBottom: "2px" }} />
                    Resume
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="#contact" onClick={() => updateExpanded(false)}>
                    <RiContactsLine style={{ marginBottom: "2px" }}/>
                    Contact
                  </Nav.Link>
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item>
                  <Nav.Link href="#home" onClick={() => updateExpanded(false)}>
                    <AiOutlineHome style={{ marginBottom: "2px" }} />
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#about" onClick={() => updateExpanded(false)}>
                    <AiOutlineUser style={{ marginBottom: "2px" }} />
                    About
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="#projects" onClick={() => updateExpanded(false)}>
                    <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }}/>
                    Projects
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="#contact" onClick={() => updateExpanded(false)}>
                    <RiContactsLine style={{ marginBottom: "2px" }}/>
                    Contact
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link onClick={() => handleResume()} >
                    <CgFileDocument style={{ marginBottom: "2px" }} />
                    Resume 
                  </Nav.Link>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
