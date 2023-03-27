import React from "react";
import { Container, Row } from "react-bootstrap";
import Type from "./Type";
import PhotoGallery from "./photoGallery";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Row>
          <h1
            className="people-header"
            style={{
              fontSize: "2.6em",
              textAlign: "center",
              padding: "25px",
              marginTop: "100px",
            }}
          >
            <span style={{ color: "white" }}>
              Technology-Environment-Society (TES) Lab at Virginia Tech!
            </span>
          </h1>
        </Row>
        <Container>
          <div style={{ padding: "50px 50px", textAlign: "left" }}>
            <Type />

            <p className="home-about-body" style={{ fontSize: "2.0 em" }}>
              We study two broad and interrelated topics: (1) climate change and
              sustainability and (2) the social implications of emerging digital
              technologies (e.g. big data, artificial intelligence). Our
              projects relate to climate change, agriculture, water quality, and
              healthcare in the U.S., and in South Asia.
            </p>
          </div>
        </Container>
      </Container>
      <div style={{ padding: "100px", margin: "auto", zIndex: 99 }}>
        <PhotoGallery />
      </div>
    </section>
  );
}

export default Home;
