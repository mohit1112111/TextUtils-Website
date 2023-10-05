import React from 'react';
import { AiFillGithub, AiOutlineLinkedin, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

const Footer = (props) => {
    return (
        <div style={{ fontFamily: "'Barlow Condensed', 'sans-serif'", minHeight: '50vh', display: 'flex', flexDirection: 'column' }}>
            <>
                <main style={{ flex: 1 }}>
                    {/* Your main content goes here */}
                </main>
                <footer className={`bg-${props.mode} text-center text-${props.mode}`} style={{ backgroundColor: `rgba(0, 0, 0, 0.7)`, margin: '0', padding: '0' }}>
                    <div className="container p-4 pb-0">
                        <section className="mb-1">
                            <a
                                className="btn btn-outline-light btn-floating m-1"
                                style={{ backgroundColor: `#55acee` }}
                                href="https://twitter.com/Mohit_SMS_007?t=2snsrPzhEcbdP5ymLAFvrw&s=09"
                                role="button"
                            >
                                <AiFillTwitterSquare />
                            </a>
                            <a
                                className="btn btn-outline-light btn-floating m-1"
                                style={{ backgroundColor: `#ac2bac` }}
                                href="https://www.instagram.com/mohit.parjapati.777/"
                                role="button"
                            >
                                <AiFillInstagram />
                            </a>
                            <a
                                className="btn btn-outline-light btn-floating m-1"
                                style={{ backgroundColor: ` #0082ca` }}
                                href="https://www.linkedin.com/in/mohit-kumar-a00571228/"
                                role="button"
                            >
                                <AiOutlineLinkedin />
                            </a>
                            <a
                                className="btn btn-outline-light btn-floating m-1"
                                style={{ backgroundColor: `#6c6c68` }}
                                href="https://github.com/mohit1112111"
                                role="button"
                            >
                                <AiFillGithub />
                            </a>
                        </section>
                    </div>
                    <div className="text-center p-3">
                        <a
                            style={{ textDecoration: "none" }}
                            className={`text-${props.mode === "light" ? "dark" : "light"}`}
                            href="https://portfolio-shubhamkr5051.netlify.app/"
                        >
                            © 2023 Copyright- Mohit Kumar
                        </a>
                    </div>
                </footer>
            </>
        </div>
    )
}

export default Footer;


