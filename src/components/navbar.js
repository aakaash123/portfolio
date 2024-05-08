import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { CgGitFork } from "react-icons/cg";
import "./navbar.css";

function NavBar() {
    return (
        <Navbar expand="md" fixed="top" className="navbar">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <span className="brand">My Brand</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            <AiOutlineHome /> Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            <AiOutlineUser /> About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/project">
                            <AiOutlineFundProjectionScreen /> Projects
                        </Nav.Link>
                        <Nav.Link as={Link} to="/resume">
                            <CgFileDocument /> Resume
                        </Nav.Link>
                        <Nav.Link href="https://example.com">
                            <ImBlog /> Blogs
                        </Nav.Link>
                        <Nav.Link href="https://github.com">
                            <CgGitFork /> GitHub
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
