import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import edwardPhoto from "../../Assets/Edward.png";
import pablo from "../../Assets/pablo.jpg";
import bhavna from "../../Assets/bhavna.jpg";
import janMichalak from "../../Assets/JanMichalak.jpg";

function People2() {
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
                Edward Prutzer
              </a>{" "}
              (he/him)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Postdoctoral Associate in Sociology at Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Edward Prutzer earned his PhD in Communications and Media from the
              Institute of Communications Research at the University of Illinois
              at Urbana-Champaign. His research focuses on how publics and
              researchers convene, deliberate, and collaborate on environmental
              and disaster management projects, particularly via crowdsourcing
              platforms and digital mapping technologies. His work on these
              tools and associated practices has been published in various
              edited collections and peer-reviewed journals, including Macrotask
              Crowdsourcing: Engaging the Crowds to Address Complex Problems;
              Co-Design: Collaborative Pedagogy in DH and Building Inclusive
              Digital Ethics; Emotions, Technology, and Health; InVisible
              Culture; and Media-N.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={edwardPhoto}
              className="img-fluid team-pic"
              alt="edward pic"
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
                href="https://www.linkedin.com/in/pablo-carcamo-corral-00273a21/"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Pablo Carcamo
              </a>{" "}
              (he/him)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              PhD Student in Sociology at Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Pablo graduated in 2018 with an Msc in Science and Technology
              Policy from the Science Policy Research Unit (SPRU) at the
              University of Sussex. Working closely with academia, civil
              society, and the public sector, his main motivation is
              participating in multidisciplinary and transdisciplinary research
              projects with tangible impacts that foster better relations with
              human and non-human actors, particularly within
              sustainability-related matters.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={pablo} className="img-fluid team-pic" alt="Pablo pic" />
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
                href="https://www.linkedin.com/in/bhavna-joshi-5a41b71b/"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Bhavna Joshi
              </a>{" "}
              (she/her)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              PhD student in Sociology at Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Bhavna received her Masters in Science and Masters in Philosophy
              degree in Anthropology from the University of Delhi, India. In her
              masters, she conducted ethnographic work in Udaipur and Delhi to
              explore the socio-cultural connotations of ‘home’ and
              ‘homelessness’. Bhavna has also worked on the problem of air
              pollution in Delhi with a focus on risk perception and
              environmental justice. Apart from social sciences, her academic
              journey has traversed the disciplines of life sciences, forensic
              science, and biotechnology.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={bhavna} className="img-fluid team-pic" alt="Bhavna pic" />
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
                href="https://www.linkedin.com/in/janjakubmichalak/"
                style={{ position: "relative", fontSize: "2em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Jan Michalak
              </a>{" "}
              (he/him)
            </h2>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Undergraduate student in Computer Science at Virginia Tech
            </p>
            <p className="home-about-body" style={{ padding: "0px" }}>
              Jan Michalak (he/him) is a fourth-year undergraduate student at
              Virginia Polytechnic and State University studying Computer
              Science who is working as a website developer on the team. His
              research interests include cryptography, cybersecurity, blockchain
              applications, and human-computer interaction (HCI). Jan has
              previously worked on a project where he and his team aimed to
              enhance user privacy when operating on sensitive data stored on an
              untrusted server. This project resulted in a publication in the
              4th IEEE International Conference on Trust, Privacy, and
              Applications (IEEE-TPS) 2022. He is set to graduate with his
              Bachelor of Science degree in May of 2023 and is eager to continue
              researching these topics in his graduate studies.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={janMichalak}
              className="img-fluid team-pic"
              alt="Jan Michalak pic"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default People2;
