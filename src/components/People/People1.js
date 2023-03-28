import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { CgWebsite } from "react-icons/cg";
import Button from "react-bootstrap/Button";

import profilePhoto from "../../Assets/maaz-gardezi.jpg";

function People1() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <img
              src={profilePhoto}
              className="img-fluid maaz-pic"
              alt="maaz pic"
            />
          </Col>
          <Col md={8} className="home-about-description">
            <h2 style={{ fontSize: "1.3em" }}>
              <a
                className="accent"
                href="linkedin.com/in/maaz-gardezi-5838a914/"
                style={{ fontSize: "2.6em" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Maaz Gardezi
              </a>{" "}
              (he/him)
            </h2>
            <p className="home-about-body">
              Assistant Professor of Sociology at{" "}
              <b className="bolditalicaccent">Virginia Tech</b>.
              <br />
              <b className="bolditalicaccent">Maaz Gardezi</b> is an assistant
              professor of sociology at Virginia Tech. He studies two broad and
              interrelated topics: (1) Climate change and sustainability and (2)
              The social implications of emerging digital technologies (e.g. big
              data, artificial intelligence) in food and agricultural systems.
              He has current projects related to climate change and agriculture
              in the U.S., Ecuador, and in South Asia. Maaz is originally from
              Lahore, Pakistan.
              <br />
              Before joining Virginia Tech, Maaz was an assistant professor of
              sociology and rural studies with a secondary appointment in the{" "}
              <b className="bolditalicaccent">
                Department of Natural Resource Management
              </b>{" "}
              at <b className="bolditalicaccent">South Dakota State </b>
              University. He has a Bachelors in economics from University of
              Bath (UK), a Masters in environmental policy from University of
              Michigan, Ann Arbor, and a PhD in Sociology and Sustainable
              Agriculture from{" "}
              <b className="bolditalicaccent">Iowa State University</b>. He has
              experience working in different sectors, including the private
              sector (Porsche Cars Great Britain), non-profit (World Wildlife
              Fund- Washington D.C.), and as a consultant to various government
              bodies. At Virginia Tech, Maaz offers undergraduate and graduate
              courses within the{" "}
              <b className="bolditalicaccent">Department of Sociology</b> and
              the newly approved graduate certificate program in Science,
              Technology, and Engineering in Policy (STEP).
              <br />
              Email:{" "}
              <a
                className="bolditalicaccent"
                href="mailto:maaz@vt.edu"
                style={{ position: "relative" }}
              >
                {""}
                maaz@vt.edu
              </a>{" "}
            </p>
            <Button
              variant="primary"
              href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2026431&HistoricalAwards=false"
              target="_blank"
              style={{ width: "100%", margin: "0 auto" }}
            >
              <CgWebsite /> &nbsp;
              {"Link to my CV"}
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default People1;
