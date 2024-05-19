import React from 'react';
import './Card.css';

const Card = () => {
  return (
  <div className="Project">
    <div class="flip-container">
          <div class="flipper">
            <div class="card_front">
            <div className="pr">
                <p className="project">
                      A Tool to extract text
                      <span>
                        Textify
                      </span>
                      &mdash; from images &mdash;
                    </p>
                </div>
              <div class="center">
                <p>React.Js</p>
                <p>BootStrap</p>
                <p>Node | Express</p>
                <p>JWT | MongoDB</p>
              </div>
            </div>
            <div class="card_back">
              <p>
              TextExtract is an innovative web application designed to seamlessly convert images into readable and editable text. Built using the powerful React framework, this application leverages cutting-edge Optical Character Recognition (OCR) technology to provide users with a fast, accurate, and user-friendly experience.
              </p>
              <button>
                <a href="https://github.com/aakaash123/Textify">Source Code</a>
              </button>
            </div>
          </div>
        </div>
        <div class="flip-container">
                  <div class="flipper">
                    <div class="card_front">
                    <div className="pr">
                        <p className="project">
                              the summary of my skills
                              <span>
                                Portfolio
                              </span>
                              &mdash; qualifications and achievements &mdash;
                            </p>
                        </div>
                      <div class="center">
                        <p>React.Js</p>
                        <p>BootStrap</p>
                        <p>Node | Express</p>
                        <p>JWT | MongoDB</p>
                      </div>
                    </div>
                    <div class="card_back">
                      <p>
                        Crafted a sleek, responsive portfolio utilizing ReactJs, HTML, CSS, and JavaScript to ensure an exceptional user experience. Implemented dynamic content for instant updates and designed interactive sections for engaging user interaction.
                      </p>
                      <button>
                        <a href="https://github.com/aakaash123/portfolio">Source Code</a>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flip-container">
                          <div class="flipper">
                            <div class="card_front">
                            <div className="pr">
                                <p className="project">
                                      your one-stop shop for finding
                                      <span>
                                        Camphub
                                      </span>
                                      &mdash; epic campgrounds &mdash;
                                    </p>
                                </div>
                              <div class="center">
                                <p>React.Js</p>
                                <p>BootStrap</p>
                                <p>Node | Express</p>
                                <p>JWT | MongoDB</p>
                              </div>
                            </div>
                            <div class="card_back">
                              <p>
                                YelpCamp is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project was part of Colt Steele's web dev course on udemy.

                                This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.
                              </p>
                              <button>
                                <a href="https://github.com/aakaash123/CampHub">Source Code</a>
                              </button>
                            </div>
                          </div>
                        </div>
        </div>
  );
};

export default Card;
