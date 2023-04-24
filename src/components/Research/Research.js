import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";

import drone from "../../Assets/drone.jpg";

import research1 from "../../Assets/research1.jpg";
import research5 from "../../Assets/research5.png";
import research6 from "../../Assets/research6.png";

function Research() {
  return (
    <Container fluid className="home-about-section">
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
          <span style={{ color: "white" }}>Current Research Work</span>
        </h1>
      </Row>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>
          <Col
            md={5}
            // style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={drone} alt="about" className="img-fluid team-pic" />
          </Col>
        </Row>
      </Container>
      <Row>
        <h1
          className="people-header"
          style={{
            fontSize: "2.6em",
            textAlign: "center",
            paddingTop: "25px",
            paddingBottom: "25px",
            paddingLeft: "150px",
            paddingRight: "150px",
            marginTop: "50px",
          }}
        >
          <span style={{ color: "white" }}>
            What are the socioeconomic and political effects of precision
            agriculture technologies on farm work and workers?
          </span>
        </h1>
      </Row>

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <p className="home-about-body" style={{ padding: "0px" }}>
              <b className="bolditalicaccent">Description:</b> Precision
              agriculture (PA) is an approach to farming that utilizes numerous
              data-driven technologies that generate localized farm data to
              assist farmers with decision-making in managing their food
              production system. While these tools can enable a more
              economically productive and environmentally sustainable farming
              practice, PA can engender social friction, creates social
              exclusion, changes to farm work and farming practices, and could
              stabilize existing inequalities in the food system. This project
              examines the social, political, and environmental effects of
              emerging precision tools in agriculture.
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
            className="about-img"
          >
            <img src={research1} alt="about" className="img-fluid" />
          </Col>
        </Row>
        {/* <Row style={{ justifyContent: "left", marginLeft: "10px" }}>
          <Col className="about-card">
            <Row>
              <b className="bolditalicaccent" style={{ fontSize: "1.2em" }}>
                Publications:
              </b>
              <br />
              <ol>
                <li>
                  Ogunyiola, A., & Gardezi, M. (2022). Restoring sense out of
                  disorder? Farmers’ changing social identities under big data
                  and algorithms. Agriculture and Human Values, 1-14.{" "}
                  <a
                    className="bolditalicaccent"
                    href="https://link.springer.com/article/10.1007/s10460-022-10334-1"
                    style={{ position: "relative" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Link
                  </a>{" "}
                </li>
                <li>
                  Gardezi, M., Adereti, D., Stock, R., Ogunyiola, A. 2022. In
                  pursuit of responsible innovation for precision agriculture
                  technologies. Journal of Responsible Innovation.{" "}
                  <a
                    className="bolditalicaccent"
                    href="https://www.tandfonline.com/doi/full/10.1080/23299460.2022.2071668"
                    style={{ position: "relative" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Link to the paper
                  </a>{" "}
                </li>
                <li>
                  Stock, R. and Gardezi, M. (2022). Arrays and algorithms:
                  Emerging regimes of dispossession at the frontiers of agrarian
                  technological governance, Earth System Governance, Volume 12,
                  2022, 100137.{" "}
                  <a
                    className="bolditalicaccent"
                    href="https://www.sciencedirect.com/science/article/pii/S2589811622000064"
                    style={{ position: "relative" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Link to the paper
                  </a>{" "}
                </li>
                <li>
                  Stock, R., and Gardezi, M. (2021). Make bloom and let wither:
                  Biopolitics of precision agriculture at the dawn of
                  surveillance capitalism. Geoforum, 122, 193-203.{" "}
                  <a
                    className="bolditalicaccent"
                    href="https://doi.org/10.1016/j.geoforum.2021.04.014"
                    style={{ position: "relative" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    https://doi.org/10.1016/j.geoforum.2021.04.014
                  </a>{" "}
                </li>
                <li>
                  Gardezi, M., and Stock, R. (2021). Growing algorithmic
                  governmentality: Interrogating the social construction of
                  trust in precision agriculture. Journal of Rural Studies, 84,
                  1-11.{" "}
                  <a
                    className="bolditalicaccent"
                    href="https://doi.org/10.1016/j.jrurstud.2021.03.004"
                    style={{ position: "relative" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    https://doi.org/10.1016/j.jrurstud.2021.03.004
                  </a>{" "}
                </li>
                <li>
                  Gardezi, Maaz and Kelly, Bronson. 2020. “Examining the Social
                  and Biophysical Determinants of U.S. Midwestern Corn Farmers’
                  Adoption of Precision Agriculture”. Precision Agriculture
                  21:549–568{" "}
                  <a
                    className="bolditalicaccent"
                    href="https://link.springer.com/article/10.1007/s11119-019-09681-7"
                    style={{ position: "relative" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    https://doi.org/10.1007/s11119-019-09681-7
                  </a>{" "}
                </li>
              </ol>
            </Row>

            <Row>
              <b className="bolditalicaccent" style={{ fontSize: "1.2em" }}>
                Research is supported through grants from:
              </b>
              <br />
              <ol>
                <li>
                  <a
                    className="bolditalicaccent"
                    href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2202706&HistoricalAwards=false"
                    style={{ position: "relative" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    National Science Foundation (NSF)
                  </a>{" "}
                  : Future of Work at the Human Technology Frontier- Research:
                  Testing a responsible innovation approach for integrating
                  precision agriculture (PA) technologies with future farm
                  workers and work (Award # 2026431/2202706). 2020-2024. Total
                  Award: US$3.5 million. (Principal Investigator){" "}
                </li>
                <li>
                  <a
                    className="bolditalicaccent"
                    href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1929814&HistoricalAwards=false"
                    style={{ position: "relative" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    National Science Foundation (NSF)
                  </a>{" "}
                  : Future of Work at the Human Technology Frontier- Planning:
                  Anticipating Risks and Benefits of Precision Agriculture (PA)
                  for the Future of Agricultural Work and Workforce: A
                  Multi-Stakeholder Research Agenda (Award # 1929814).
                  2019-2021. Total Award: US$150,000. (Principal Investigator)
                </li>
                <li>
                  Midwest Big Data Hub - Unmanned Aircraft Systems, Plant
                  Sciences, and Education (UASPSE) Early career researcher
                  foreign collaboration grant: Understanding the digital divide
                  in agriculture. 2019. Total Award: US$4,500. (Principal
                  Investigator)
                </li>
              </ol>
            </Row>
          </Col>
        </Row> */}
      </Container>

      <Row>
        <h1
          className="people-header"
          style={{
            fontSize: "2.6em",
            textAlign: "center",
            paddingTop: "25px",
            paddingBottom: "25px",
            paddingLeft: "150px",
            paddingRight: "150px",
            marginTop: "50px",
          }}
        >
          <span style={{ color: "white" }}>
            How can food production systems transition to sustainability under
            social, political and biophysical stressors?
          </span>
        </h1>
      </Row>

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <p className="home-about-body" style={{ padding: "0px" }}>
              <b className="bolditalicaccent">Description:</b> In times of
              accelerating earth system transformation and their potentially
              disruptive societal consequences, imagining the possibilities for
              transitioning food and agriculture toward sustainability is a core
              social and political priority for nation states and international
              development organizations. This research project interrogates the
              social and political realities and pathways for transforming the
              food system toward sustainability.
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
            className="about-img"
          >
            <img src={research5} alt="about" className="img-fluid" />
          </Col>
        </Row>
        {/* <Row style={{ justifyContent: "left", marginLeft: "10px" }}>
          <Col className="about-card">
            <Row>
              <b className="bolditalicaccent" style={{ fontSize: "1.2em" }}>
                Publications:
              </b>
              <br />
              <ol>
                <li>
                  Gardezi, M. & Arbuckle, J.G. (2019) “The influence of
                  objective and perceived adaptive capacity on Midwestern
                  farmers’ use of cover crops”. Weather, Climate and Society.
                </li>
                <li>
                  Gardezi, M. & Arbuckle J.G (2018). “Techno-optimism and
                  farmers’ attitudes toward climate change adaptation.”
                  Environment and Behavior.
                </li>
                <li>
                  Gardezi, M. and Arbuckle, J. G. (2017). “Spatially
                  representing vulnerability to extreme rain events using
                  Midwestern farmers’ objective and perceived attributes of
                  adaptive capacity”. Risk Analysis.
                </li>
                <li>
                  Shao, W, Gardezi, M., Xian, S. (2018). “Examining the effects
                  of objective hurricane risks and community resilience on risk
                  perceptions of hurricanes at the county level in the U.S. Gulf
                  coast: An innovative approach”, Annals of the American
                  Association of Geographers. 108:5, 1389-1405
                </li>
                <li>
                  Gardezi, Maaz (2016). “David A. Cleveland: Balancing on a
                  planet: the future of food and agriculture, California Studies
                  in Food and Culture.” Agriculture and Human Values, 33(2),
                  491-492. Book Review
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
                  United States Department of Agriculture (USDA) - Natural
                  Resources Conservation Service (NRCS),. Roadmap to Water
                  Resilience- Valuing Water as a Resource for Improved Ag Land
                  Profitability and Reduction of Downstream Flood Risk”. Total
                  Award: US$887,687; Dr. Gardezi’s share = US$90,000 (PI: Dr.
                  John McMaine) Co-Principal Investigator
                </li>
                <li>
                  South Dakota State University. Research and Scholarship
                  Support Fund. Examining the social and behavioral determinants
                  of U.S. public’s support for climate change mitigation policy:
                  A Bayesian meta-analysis. Total Award: US$1,872. Principal
                  Investigator
                </li>
                <li>
                  Computing Community Consortium (CCC) & Midwest Big Data Hub
                  (MBDH). Early Career Research Seed Funding. 2016. Total Award:
                  US$3,500.
                </li>
                <li>
                  Travel Award, United States Global Change Research Program
                  (USGCRP) & National Aeronautics and Space Administration
                  (NASA) ($1000).
                </li>
                <li>
                  Ecological Risk Assessment Specialty Group Paper Award,
                  Society of Risk Analysis ($500)
                </li>
              </ol>
            </Row>
          </Col>
        </Row> */}
      </Container>

      <Row>
        <h1
          className="people-header"
          style={{
            fontSize: "2.6em",
            textAlign: "center",
            paddingTop: "25px",
            paddingBottom: "25px",
            paddingLeft: "150px",
            paddingRight: "150px",
            marginTop: "50px",
          }}
        >
          <span style={{ color: "white" }}>
            Can climate smart agriculture (CSA) and climate policies address
            structural challenges of social power and inequality in the Global
            South?
          </span>
        </h1>
      </Row>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <p className="home-about-body" style={{ padding: "0px" }}>
              <b className="bolditalicaccent">Description:</b> Climate-smart
              agriculture (CSA) includes technological, managerial and policy
              innovations that can help less developed nations simultaneously
              achieve three development goals: (1) enhance the ability of the
              communities to adapt to climate change (adaptation), (2) reduce
              greenhouse (GHG) emissions from food production and distribution
              processes (mitigation), and (3) improve food production (food
              security). Policy actors (representatives of the state
              bureaucracy, international and national NGOs, donor agencies,
              bilateral and multilateral organizations) and institutions
              acknowledge that CSA has been a difficult approach to implement.
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
            className="about-img"
          >
            <img src={research6} alt="about" className="img-fluid" />
          </Col>
        </Row>
        {/* <Row style={{ justifyContent: "left", marginLeft: "10px" }}>
          <Col className="about-card">
            <Row>
              <b className="bolditalicaccent" style={{ fontSize: "1.2em" }}>
                Publications:
              </b>
              <br />
              <ol>
                <li>
                  Ogunyiola, A., Gardezi, M., and Vij, S. (2022). Smallholder
                  farmers’ engagement with climate smart agriculture in Africa:
                  Role of local knowledge and upscaling. Climate Policy.{" "}
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
                  Vij, S., Biesbroek, R., Stock, R., Gardezi, M., Ishtiaque, A.,
                  Groot, A., Termeer, K. Power-sensitive design principles’ for
                  climate change adaptation policy-making in South Asia. Earth
                  System Governance, 9, 100-109.{" "}
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
        </Row> */}
      </Container>
    </Container>
  );
}

export default Research;
