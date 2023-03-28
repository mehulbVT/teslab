import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function News() {
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
            <span style={{ color: "white" }}>
              Latest News Updates from TES Lab
            </span>
          </h1>
        </Row>
        <Container>
          <Row style={{ justifyContent: "left", marginLeft: "10px" }}>
            <Col className="about-card">
              <Row>
                <br />
                <ul>
                  <li style={{ padding: "15px" }}>
                    <span style={{ color: "red" }}>NEW PAPER!!</span> 7/30/2022
                    - Ogunyiola, A., & Gardezi, M. (2022). Restoring sense out
                    of disorder? Farmers’ changing social identities under big
                    data and algorithms. Agriculture and Human Values, 1-14.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Flink.springer.com%2Farticle%2F10.1007%2Fs10460-022-10334-1&sa=D&sntz=1&usg=AOvVaw0R1EUyE9zuNCH62HiCNS-W"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Link
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    <span style={{ color: "red" }}>NEW PAPER!!</span> 6/7/2022 -
                    In pursuit of responsible innovation for precision
                    agriculture technologies. Journal of Responsible Innovation.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fwww.tandfonline.com%2Fdoi%2Ffull%2F10.1080%2F23299460.2022.2071668&sa=D&sntz=1&usg=AOvVaw0qDjB4aoVSAj6ZgpdebhV5"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the paper!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    <span style={{ color: "red" }}>NEW GRANT!!</span> 5/19/2022
                    - Trustworthy by design: Using human-centered AI for
                    improving healthcare training effectiveness.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fhci.icat.vt.edu%2Fnews%2Fchci-planning-grant-awarded-to-maaz-gardezi--elham-morshedzadeh-.html&sa=D&sntz=1&usg=AOvVaw2y8YksNP0WG7hFyAx6YjLG"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the grant!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    3/15/2022 - Prutzer, E. (2022). Mapping pedagogies: applying
                    cartographic practice to the public sphere. Learning, Media
                    and Technology, 47(1), 39-52.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fwww.tandfonline.com%2Fdoi%2Ffull%2F10.1080%2F17439884.2021.2021535&sa=D&sntz=1&usg=AOvVaw3qGBLP-klBVFbsj6kXH6qP"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the paper!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    3/13/2022 - Stock, R. and Gardezi, M. (2022). Arrays and
                    algorithms: Emerging regimes of dispossession at the
                    frontiers of agrarian technological governance, Earth System
                    Governance, Volume 12, 2022, 100137.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS2589811622000064&sa=D&sntz=1&usg=AOvVaw1vgpkw1t_4Sy3TJyF4Df68"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the paper!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    1/19/2021 - Ogunyiola, A., Gardezi, M., and Vij, S. (2022).
                    Smallholder farmers’ engagement with climate smart
                    agriculture in Africa: Role of local knowledge and
                    upscaling. Climate Policy.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fdoi.org%2F10.1080%2F14693062.2021.2023451&sa=D&sntz=1&usg=AOvVaw0tEmu5y6RVsDSTPw0j10M8"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the paper!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    1/4/2021 - Paper "Prioritizing climate-smart agriculture: An
                    organizational and temporal review" published in Wiley
                    Interdisciplinary Reviews: Climate Change{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fwires.onlinelibrary.wiley.com%2Fdoi%2Ffull%2F10.1002%2Fwcc.755&sa=D&sntz=1&usg=AOvVaw1CSKZiipqMu-TszRoA0WRv"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the paper!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    12/3/2021 - Paper published in Earth System Governance that
                    examines power and politics in climate change adaptation
                    policy making in South Asia. Dr. Sumit Vij is the lead
                    author.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS2589811621000136&sa=D&sntz=1&usg=AOvVaw2Yi6JtzOO9GnC2ryROlrWg"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the paper!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    10/2/2021 - Paper published in Geoforum that examines the
                    power of big data and surveillance capitalism under
                    precision agriculture.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fabs%2Fpii%2FS0016718521001135&sa=D&sntz=1&usg=AOvVaw050qPyufKscJX1sxZK6m-9"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Link to the paper!
                    </a>{" "}
                  </li>
                  <li style={{ padding: "15px" }}>
                    06/20/2021 - Paper published in Journal of Rural Studies
                    that explores farmers' moralistic trust in new and emerging
                    digital agriculture technologies.{" "}
                    <a
                      className="bolditalicaccent"
                      href="https://www.google.com/url?q=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fabs%2Fpii%2FS0743016721000887&sa=D&sntz=1&usg=AOvVaw0h18l-irj53opb1NVhjjQd"
                      style={{ position: "relative" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link to the paper!
                    </a>{" "}
                  </li>
                </ul>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default News;
