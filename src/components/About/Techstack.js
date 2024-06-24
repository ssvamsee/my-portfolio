import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiAwslambda,
  SiAmazonaws,
  SiPostgresql,
  SiBitbucket,
  SiSocketdotio,
  SiServerless,
  SiTypescript,
  SiGithub
} from "react-icons/si";
import { Tooltip } from "react-tooltip";


function Techstack() {
  return (
    <>
          <Tooltip id="tooltip" />

    <Row style={{ justifyContent: "center", paddingBottom: "80px" }}>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="Java Script">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="Type Script">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="Node Js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="Mongo DB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="Redis">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="AWS">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="Lambda">
        <SiAwslambda />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="Serverless">
        <SiServerless />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="SQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="Socket.io">
        <SiSocketdotio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="GitHub">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="BitBucket">
        <SiBitbucket />
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
