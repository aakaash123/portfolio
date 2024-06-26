// NavBar.js
import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { CgGitFork } from "react-icons/cg";
import "./navbar.css"; // Import your CSS file

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Navbar expand="md" fixed="top" className="navbar">
            <Container>
            <div id="nav-icon4" className={isOpen ? 'open' : ''} onClick={toggleMenu}>
                                                                  <span></span>
                                                                  <span></span>
                                                                  <span></span>
                                                                </div>
{isOpen &&
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            <AiOutlineHome /> Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/experience">
                            <AiOutlineUser /> Experience
                        </Nav.Link>
                        <Nav.Link as={Link} to="/project">
                            <AiOutlineFundProjectionScreen /> Projects
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact">
                            <CgFileDocument /> Contact
                        </Nav.Link>
                        <Nav.Link as={Link} to="/skills">
                            <ImBlog /> Skills
                        </Nav.Link>
                        <Nav.Link href="https://rb.gy/fouai6">
                            <CgGitFork /> Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>}
            </Container>
        </Navbar>
    );
}

export default NavBar;
