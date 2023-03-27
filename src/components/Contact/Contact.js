import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { AiFillMail } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaResearchgate,
  FaGoogle,
  FaTwitterSquare,
} from "react-icons/fa";

import SimpleMap from "./Map";

function Contact() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Row>
          <h1
            className="people-header"
            style={{
              fontSize: "2.6em",
              textAlign: "center",
              padding: "25px",
              marginTop: "50px",
            }}
          >
            <span style={{ color: "white" }}>Contact US</span>
          </h1>
        </Row>
        <SimpleMap />

        <Row style={{ marginTop: "50px" }}>
          <Col md={12} id="contact" className="home-about-social">
            <h1>FIND US ON</h1>
            <ul className="home-about-social-links">
              <li className="s-icons">
                <a
                  href="mailto:maaz@vt.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              {/* <li className="s-icons">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li> */}
              <li className="s-icons">
                <a
                  href="https://www.linkedin.com/in/maaz-gardezi-5838a914/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://www.researchgate.net/profile/Maaz-Gardezi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaResearchgate />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://scholar.google.com/citations?user=pXh4pm8AAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaGoogle />
                </a>
              </li>
              {/* <li className="s-icons">
                <a
                  href="https://www.instagram.com//"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
              <li className="s-icons">
                <a
                  href="https://twitter.com/maazgardezi?lang=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTwitterSquare />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="accent">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Contact;
