import React from "react";
import { Container, Row } from "react-bootstrap";

function Opportunities() {
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
            <span style={{ color: "white" }}>Current Opportunities</span>
          </h1>
        </Row>
        <div style={{ width: "80%", margin: "auto" }}>
          <p className="home-about-body">
            I am always looking to recruit graduate student (MS or PhD) in
            Sociology at Virginia Tech to work with me on:
            <ul>
              <li>Climate change and sustainability issues</li>
              <li>
                Social implications of emerging digital technologies in
                agriculture or other sectors (Big Data, Artificial Intelligence)
              </li>
            </ul>
          </p>
          <p className="home-about-body">
            If you are interested in this area of research, please send me a
            brief email and tell me about your interests and qualifications:
            <a
              className="bolditalicaccent"
              href="mailto:maaz@vt.edu"
              style={{ position: "relative" }}
            >
              {""}
              maaz@vt.edu
            </a>{" "}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Opportunities;
