import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import damilola from "../../Assets/Damilola.jpg";
import megan from "../../Assets/Megan.jpg";
import anne from "../../Assets/Anne.JPG";
import ayorinde from "../../Assets/Ayorinde.jpg";
import martin from "../../Assets/Martin.jpg";

function People3() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col
            md={8}
            className="home-about-description"
            style={{ textAlign: "left" }}
          >
            <h2 style={{ fontSize: "1em", textAlign: "left" }}>
              <a
                className="bolditalicaccent"
                href="*"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Damilola Tobiloba Adereti
              </a>{" "}
              (he/him)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              PhD Student in Sociology at South Dakota State University
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Dami is a PhD Student in Sociology at South Dakota State
              University. He runs with a passion for sustainable development
              with research interests in extension, food security, children and
              youth in agriculture, gender, and rural communities.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={damilola} className="img-fluid team-pic" alt="dami pic" />
          </Col>
        </Row>

        <Row>
          <Col
            md={8}
            className="home-about-description"
            style={{ textAlign: "left" }}
          >
            <h2 style={{ fontSize: "1em", textAlign: "left" }}>
              <a
                className="bolditalicaccent"
                href="*"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Megan Schaefer
              </a>{" "}
              (she/her)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Undergraduate student at Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Megan Schaefer (she/her) is a third-year undergraduate at Virginia
              Polytechnic and State University who is working as a research
              assistant on the team. She is currently earning degrees in
              Philosophy, Politics, and Economics (PPE), Political Science:
              Legal Studies, and Criminology with an expected graduation date of
              May 2023. Megan has previously worked as a research assistant on a
              project concerning Central and Eastern European transition
              governments. She is currently a student ambassador to Virginia
              Tech’s PPE Program and works at the campus Writing Center. Outside
              of class, Megan volunteers with the Roanoke Refugee Partnership
              (RRP) and serves as an officer in the student group Coalition for
              Refugee Resettlement. Her academic interests include refugee
              studies, global development and neocolonialism, and prison
              reform/abolition. Her personal interests include enjoying and
              analyzing film, music, and other art.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={megan} className="img-fluid team-pic" alt="megan pic" />
          </Col>
        </Row>

        <Row>
          <Col
            md={8}
            className="home-about-description"
            style={{ textAlign: "left" }}
          >
            <h2 style={{ fontSize: "1em", textAlign: "left" }}>
              <a
                className="bolditalicaccent"
                href="https://www.linkedin.com/in/anne-patrick-72452811b/"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Anne Patrick
              </a>{" "}
              (she/her)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              PhD Candidate in Sociology at Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Anne Patrick received her MA in Sociology in 2018 from Morehead
              State University. Her research focuses on social and cultural
              discourses that take place in digital spaces and how these online
              discourses reify structures of inequality. Her research interests
              include digital sociology, food studies/consumption, political
              sociology, and inequality. Anne’s recent publication in Food
              Studies: An Interdisciplinary Journal examined reactions to the
              consumption of alternative meats.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={anne} className="img-fluid team-pic" alt="anne pic" />
          </Col>
        </Row>
        <Row>
          <Col
            md={8}
            className="home-about-description"
            style={{ textAlign: "left" }}
          >
            <h2 style={{ fontSize: "1em", textAlign: "left" }}>
              <a
                className="bolditalicaccent"
                href="https://www.linkedin.com/in/ayorinde-ogunyiola-229a7231/"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Ayorinde Ogunyiola
              </a>{" "}
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Postdoctoral Researcher, Purdue University
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Ayorinde graduated with a PhD in Sociology from South Dakota State
              University. His research focused on climate-smart agriculture
              (CSA) and development, and the socio-ethical implication of
              digital technologies on society. Ayo is currently a post-doctoral
              research fellow at Purdue University, where he is working on
              multiple research projects related to agricultural conservation in
              the U.S.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={ayorinde}
              className="img-fluid team-pic"
              alt="ayorinde pic"
            />
          </Col>
        </Row>

        <Row>
          <Col
            md={8}
            className="home-about-description"
            style={{ textAlign: "left" }}
          >
            <h2 style={{ fontSize: "1em", textAlign: "left" }}>
              <a
                className="bolditalicaccent"
                href="*"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Martin Kloster
              </a>{" "}
              (They/Them)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Martin Kloster is an undergrad research intern who is interested
              in responsible innovation. They were born in Brookings, SD, and
              attended high school in Sioux Falls, SD. For most of their life
              they went undiagnosed with dyslexia and ADHD, until they sought
              testing in their freshman year of college. This, combined with
              their experiences with long term poor health, lead them to deep
              dive into disability studies. This lends itself readily to the
              topic of responsible research and innovation and leads work to
              always seek to incorporate a variety of needs and perspectives.
              When not studying responsible research and innovation, they work
              with others to expand disability services on campus, make ideas
              more accessible, and explore their wide array of interests.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={martin} className="img-fluid team-pic" alt="martin pic" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default People3;
