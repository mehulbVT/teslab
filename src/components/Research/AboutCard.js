import React from "react";
import { Container } from "react-bootstrap";

function AboutCard() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <h2 style={{ fontSize: "1em", textAlign: "left" }}>
          <span className="accent" style={{ fontSize: "2em" }}>
            Principal Areas of Research Focus
          </span>
        </h2>
        <p className="about-card">
          <ul>
            <li>Social implications of emerging agricultural technologies</li>
            <li>Climate change and sustainability</li>
            <li>Responsible innovation and governance</li>
            <li>Computational social sciences</li>
            <li>Participatory design of emerging technologies</li>
          </ul>
        </p>
      </Container>
    </section>
  );
}

export default AboutCard;
