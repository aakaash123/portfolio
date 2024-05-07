import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import "./Home.css";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particles
                    id="tsparticles"
                    params={{
                        particles: {
                            number: {
                                value: 160,
                                density: {
                                    enable: true,
                                    value_area: 1500,
                                },
                            },
                            line_linked: {
                                enable: false,
                                opacity: 0.03,
                            },
                            move: {
                                direction: "right",
                                speed: 0.05,
                            },
                            size: {
                                value: 1,
                            },
                            opacity: {
                                anim: {
                                    enable: true,
                                    speed: 1,
                                    opacity_min: 0.05,
                                },
                            },
                        },
                        interactivity: {
                            events: {
                                onclick: {
                                    enable: true,
                                    mode: "push",
                                },
                            },
                            modes: {
                                push: {
                                    particles_nb: 1,
                                },
                            },
                        },
                        retina_detect: true,
                    }}
                />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> Akash Gupta</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Software Developer @ Pype",
                                            "Former SDE Intern @ Amazon",
                                            "MERN Stack Developer",
                                            "Former ML Intern @ Feynn Labs",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="home-about-social">
                            <h1>FIND ME ON</h1>
                            <p>
                                Feel free to <span className="purple">connect </span>with me
                            </p>
                            <ul className="home-about-social-links">
                                <li className="social-icons">
                                    <a
                                        href="https://github.com/aakaash123"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  home-social-icons"
                                    >
                                        <AiFillGithub />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://twitter.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  home-social-icons"
                                    >
                                        <AiOutlineTwitter />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://www.linkedin.com/in/akash-iiitdmj/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  home-social-icons"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour home-social-icons"
                                    >
                                        <AiFillInstagram />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;
