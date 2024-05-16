import React from 'react';
import { Container } from 'react-bootstrap';
import Particles from 'react-tsparticles';
import Typewriter from 'typewriter-effect';
import './Home.css';

function Home() {
    return (
        <section className="section" id="home">
            <Container className="home-content">
                <div style={{padding:"10%"}}>
                    <h1 className="heading-name">
                                            <strong className="main-name">Akash Gupta</strong>
                                        </h1>
                                        <div className="typewriter-container">
                                            <Typewriter
                                                options={{
                                                    strings: [
                                                        'Software Developer @ Pype',
                                                        'Former SDE Intern @ Amazon',
                                                        'MERN Stack Developer',
                                                        'Former ML Intern @ Feynn Labs',
                                                    ],
                                                    autoStart: true,
                                                    loop: true,
                                                    delay: 50,
                                                }}
                                            />
                                        </div>
                </div>
                <div className="intro-section">
                    <p className="intro-text home-title">
                    <h3 class="home-title">
                                                              <span>Hey! 👋 I am Akash Gupta, a recent B.Tech grad (2019 - 2023) with hands-on experience as SDE I at Pype, SDE Intern at Amazon and a Machine Learning Intern at Feynn Labs.
                                                              Skilled in Java, JavaScript, C++, and Python, I work on both front-end (React.js, HTML, CSS) and back-end (Node.js, Django, MySQL) tech.
                                                              Armed with a solid foundation in OOP, DSA and design patterns, I bring a holistic understanding of SDLC, DBMS, OS, and CN to the table.
                                                              I have got a 4-star rating on CodeChef, having cracked 1000+ DSA problems across diverse platforms.
                                                                                            Actively exploring full-time SDE roles - hit me up at <a href="mailto:2019013@iiitdmj.ac.in">2019013@iiitdmj.ac.in</a> or <a href="tel:+919695960616">📞 9695960616</a></span>
                                                            </h3>

                    </p>
                </div>
            </Container>
        </section>
    );
}

export default Home;
