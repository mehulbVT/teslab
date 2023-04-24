import React from "react";
import { Container, Row } from "react-bootstrap";

function Opportunities() {
  return (
    <section>
      <Container
        fluid
        className="home-about-section"
        id="about"
        style={{ height: "100vh" }}
      >
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
        <Container>
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
        </Container>
        {/* <Row>
          <h1
            className="people-header"
            style={{
              fontSize: "2.6em",
              textAlign: "center",
              padding: "25px",
              marginTop: "50px",
            }}
          >
            <span style={{ color: "white" }}>Ongoing Projects</span>
          </h1>
        </Row>
        <Container>
          <Row style={{ justifyContent: "left", marginLeft: "10px" }}>
            <Col className="about-card">
              <Row>
                --------------- Placeholder for projects list ------------
                <b className="bolditalicaccent" style={{ fontSize: "1.2em" }}>
                  Publications:
                </b>
                <br />
                <ol>
                  <li>
                    Ogunyiola, A., Gardezi, M., and Vij, S. (2022). Smallholder
                    farmers’ engagement with climate smart agriculture in
                    Africa: Role of local knowledge and upscaling. Climate
                    Policy.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://doi.org/10.1080/14693062.2021.2023451"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      https://doi.org/10.1080/14693062.2021.2023451
                    </a>{" "}
                  </li>
                  <li>
                    Gardezi, M., Michael, S., Stock, R., Vij, S., Ogunyiola, A.,
                    and Ishtiaque, A. (2021). Prioritizing climate-smart
                    agriculture: An organizational and temporal review. Wiley
                    Interdisciplinary Reviews: Climate Change, WCC755.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://doi.org/10.1002/wcc.755 "
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      https://doi.org/10.1002/wcc.755
                    </a>{" "}
                  </li>
                  <li>
                    Vij, S., Biesbroek, R., Stock, R., Gardezi, M., Ishtiaque,
                    A., Groot, A., Termeer, K. Power-sensitive design
                    principles’ for climate change adaptation policy-making in
                    South Asia. Earth System Governance, 9, 100-109.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://doi.org/10.1016/j.esg.2021.100109"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      https://doi.org/10.1016/j.esg.2021.100109
                    </a>{" "}
                  </li>
                </ol>
              </Row>

              <Row>
                <b className="bolditalicaccent" style={{ fontSize: "1.2em" }}>
                  Grants and Awards:
                </b>
                <br />
                <ol>
                  <li>
                    +Policy Fellowship, Policy Destination Area, Virginia Tech.
                    Project title: “Responsible innovation and governance of
                    climate smart irrigation technologies in the Hindu Kush
                    Himalayas” ($10,500).
                  </li>
                </ol>
              </Row>
            </Col>
          </Row>
        </Container> */}
      </Container>
    </section>
  );
}

export default Opportunities;
