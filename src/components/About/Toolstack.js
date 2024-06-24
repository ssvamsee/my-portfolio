import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiWindows11,
} from "react-icons/si";

import {
  DiUbuntu,
  DiMongodb
} from "react-icons/di";
import { Tooltip } from "react-tooltip";


function Toolstack() {
  return (
    <>
      <Tooltip id="tooltip" />

      <Row style={{ justifyContent: "center", paddingBottom: "80px" }}>
        <Col xs={4} md={2} className="tech-icons" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="Ubuntu">
          <DiUbuntu />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="Windows">
          <SiWindows11 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="VS Code">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-tooltip-id="tooltip" data-tooltip-content="MongoDB Compass">
        <DiMongodb />
      </Col>
        <Col xs={4} md={2} className="tech-icons" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="Postman">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-tooltip-id="tooltip" data-tooltip-content="Slack">
          <SiSlack />
        </Col>
      </Row>
    </>
  );
}

export default Toolstack;
