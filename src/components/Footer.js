import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaGoogle,
  FaResearchgate,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Mehul Bhanushali</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} TESLab</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="s-icons">
              <a
                href="mailto:maaz@vt.edu"
                className="icon-colour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            {/* <li className="s-icons">
              <a
                href="https://github.com/"
                className="icon-colour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li> */}
            <li className="s-icons">
              <a
                href="https://www.linkedin.com/in/maaz-gardezi-5838a914/"
                className="icon-colour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="s-icons">
              <a
                href="https://www.researchgate.net/profile/Maaz-Gardezi"
                className="icon-colour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaResearchgate />
              </a>
            </li>
            <li className="s-icons">
              <a
                href="https://scholar.google.com/citations?user=pXh4pm8AAAAJ&hl=en"
                className="icon-colour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogle />
              </a>
            </li>
            {/* <li className="s-icons">
              <a
                href="https://www.instagram.com//"
                className="icon-colour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li> */}
            <li className="s-icons">
              <a
                href="https://twitter.com/maazgardezi?lang=en"
                className="icon-colour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
