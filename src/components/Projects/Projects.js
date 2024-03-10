import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jlmush from "../../Assets/Projects/jlmush.png";
import chatify from "../../Assets/Projects/chatify.png";
import camcrew from "../../Assets/Projects/camcrew.png";
import cellixbio from "../../Assets/Projects/cellixbio.png";
import oconnect from "../../Assets/Projects/oconnect.png";
import CamArtisans from "../../Assets/Projects/CamArtisians.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oconnect}
              title="OConnect"
              description="Worldwide connectivity is todays necessity. OCONNECT is an online video conferencing tool with HD audio quality that provides unmatched clarity and quality to every virtual connection."
              demoLink="https://oconnect.ai/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="OPAL"
              description="The Chat Application which connects users among the world and unites through audio and video call along with text messages"
              demoLink="https://o-pal-dev.onpassive.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cellixbio}
              title="Cellix-Bio"
              description="Cellix Bio is a pioneering biotechnology company specializing in cutting-edge solutions for personalized medicine and drug development. They leverage advanced technologies to facilitate precision diagnostics and innovative therapies, aiming to revolutionize healthcare by tailoring treatments to individual patient needs"
              ghLink="https://github.com/ssvamsee/Cellix_Bio/tree/bdd78160e3d0ed6b18af7f320926c60273729871/cellixbio"
              demoLink="https://www.cellixbio.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CamArtisans}
              title="CamArtisans"
              description="CamArtisians is a Web application that connects
              freelance camera operators with clients in need
              of their services. With CamArtisians, clients can
              easily find and book experienced camera
              operators for their projects. 
              "
              ghLink="https://github.com/ssvamsee/CamArtisans/tree/main"
              demoLink="https://ssvamsee.github.io/CamArtisans/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={camcrew}
              title="CamCrew"
              description="CamCrew is a web application or project showcasing a platform for image processing and computer vision, potentially aimed at empowering users with tools for visual data analysis. It likely offers features or demonstrations utilizing computer vision techniques, fostering exploration and experimentation within the realm of image-based technologies. It provides an interface or resources for users interested in delving into computer vision applications."
              ghLink="https://github.com/ssvamsee/CamCrew/tree/main/camcrew"
              demoLink="https://ssvamsee.github.io/CamCrew/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jlmush}
              title="Jlmush"
              description="Doctor-patient consultation applications provide a convenient and accessible platform for patients to connect with healthcare providers. With features such as virtual appointments and
              secure messaging, patients can receive medical
              advice and treatment without leaving their
              homes.
              "
              demoLink="https://www.jlmush.com/"
            />
          </Col>


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
