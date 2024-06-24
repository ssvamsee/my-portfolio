import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";

function Projects() {
  const [showMore, setShowMore] = useState(false);

  // Your project data
  const projects = [
    {
      imgPath: "Assets/Projects/oconnect.png",
      title: "OConnect",
      description: "Worldwide connectivity is todays necessity. OCONNECT is an online video conferencing tool with HD audio quality that provides unmatched clarity and quality to every virtual connection.",
      demoLink: "https://oconnect.ai/",
      aos:"flip-left"
    },
    {
      imgPath: "Assets/Projects/opal.png",
      title: "OPAL",
      description: "The Chat Application which connects users among the world and unites through audio and video call along with text messages",
      demoLink: "https://o-pal-dev.onpassive.com/",
      aos:"flip-right"
    },
    {
      imgPath: "Assets/Projects/cellixbio.png",
      title: "Cellix-Bio",
      description: "Cellix Bio is a pioneering biotechnology company specializing in cutting-edge solutions for personalized medicine and drug development. They leverage advanced technologies to facilitate precision diagnostics and innovative therapies, aiming to revolutionize healthcare by tailoring treatments to individual patient needs",
      // ghLink: "https://github.com/ssvamsee/Cellix_Bio/tree/bdd78160e3d0ed6b18af7f320926c60273729871/cellixbio",
      demoLink: "https://www.cellixbio.com/",
      aos:"flip-left"
    },
    {
      imgPath: "Assets/Projects/camartisians.png",
      title: "CamArtisans",
      description: "CamArtisians is a Web application that connects freelance camera operators with clients in need of their services. With CamArtisians, clients can easily find and book experienced camera operators for their projects.",
      // ghLink: "https://github.com/ssvamsee/CamArtisans/tree/main",
      demoLink: "https://ssvamsee.github.io/CamArtisans/",
      aos:"flip-right"
    },
    {
      imgPath: "Assets/Projects/camcrew.png",
      title: "CamCrew",
      description: "CamCrew is a web application or project showcasing a platform for image processing and computer vision, potentially aimed at empowering users with tools for visual data analysis. It likely offers features or demonstrations utilizing computer vision techniques, fostering exploration and experimentation within the realm of image-based technologies. It provides an interface or resources for users interested in delving into computer vision applications.",
      // ghLink: "https://github.com/ssvamsee/CamCrew/tree/main/camcrew",
      demoLink: "https://ssvamsee.github.io/CamCrew/",
      aos:"flip-left"
    },
    {
      imgPath: "Assets/Projects/jlmush.png",
      title: "Jlmush",
      description: "Doctor-patient consultation applications provide a convenient and accessible platform for patients to connect with healthcare providers. With features such as virtual appointments and secure messaging, patients can receive medical advice and treatment without leaving their homes.",
      demoLink: "https://www.jlmush.com/",
      aos:"flip-right"
    },
    {
      imgPath: "Assets/Projects/chat.png",
      title: "Messaging",
      description: "Messaging application which is a clone to Whatsapp with few need to implement feature. Which will also support audio and video call. Personal chat with encrypted messages.",
      demoLink: "https://chat.siddamvamsee.in/",
      aos:"flip-left"
    },
    {
      imgPath: "Assets/Projects/devotional.png",
      title: "Music Player",
      description: "A Music Player which will choose the day dynamically and play the respected songs as per the auspicious of the day related the particular god.",
      demoLink: "https://devotional.siddamvamsee.in/",
      aos:"flip-right"
    },
    {
      imgPath: "Assets/Projects/cloud2labs.png",
      title: "Cloud 2 Labs",
      description: "Cloud2labs.in is a dynamic platform dedicated to providing innovative cloud computing solutions tailored to modern business needs. With a focus on enhancing operational efficiency and scalability, Cloud2labs.in offers a comprehensive suite of cloud services, including infrastructure management, application development, and data analytics.",
      // ghLink: "https://github.com/ssvamsee/Cellix_Bio/tree/bdd78160e3d0ed6b18af7f320926c60273729871/cellixbio",
      demoLink: "https://www.cloud2labs.com/",
      aos:"flip-left"
    },
    {
      imgPath: "Assets/Projects/educational.png",
      title: "Educational",
      description: "Educational Instite website a for a local college where it can display college activities and their staff info along with achievements of the students over a period of time.",
      // ghLink: "https://github.com/ssvamsee/CamArtisans/tree/main",
      demoLink: "https://ssvamsee.github.io/VGRM-College/",
      aos:"flip-right"
    },
    {
      imgPath: "Assets/Projects/malasa.png",
      title: "Food Delivery",
      description: "Food Delivery application where user can place the order it will be delivered, in order to maintain it I have developed user mobile application, delivery application and an admin portal to manage the order info",
      // ghLink: "https://github.com/ssvamsee/CamCrew/tree/main/camcrew",
      demoLink: "https://smartchipsatish.github.io/ChickenCenter-Admin/",
      aos:"flip-left"
    },
    {
      imgPath: "Assets/Projects/portifolio.png",
      title: "My Portifolio",
      description: "This is My Portfolio, where I Expressed my skillset along with the tools I have used so far, projects which I have done, and along with the beautiful UI",
      demoLink: "https://www.siddamvamsee.in",
      aos:"flip-right"
    }
  ];

  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.slice(0, showMore ? projects.length : 5).map((project, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                aos={project.aos}
              />
            </Col>
          ))}
          {!showMore && (
            <Col md={4} className="project-card">
              <Card className="project-card-view" data-aos="flip-right">
                {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
                <Card.Body style={{alignContent:'center'}}>
                  {/* <Card.Title>{props.title}</Card.Title> */}
                  <Card.Text style={{ textAlign: "justify", fontSize:'2.5vh'}}>
                  These projects showcase my skills and experience in various areas of software development. If you are interested in seeing more, please click on the <span className="purple">"Show More"</span> button.
                  </Card.Text>
                  {/* {props.ghLink && ( */}
                  <Button onClick={() => setShowMore(true)} style={{ marginTop: "20px" }}>
                Show More
              </Button>
                  {/* )} */}
                  {"\n"}
                  {"\n"}

                  {/* {!props.isBlog && props.demoLink && (
                    <Button
                      variant="primary"
                      href={props.demoLink}
                      target="_blank"
                      style={{ marginLeft: "10px" }}
                    >
                      <CgWebsite /> &nbsp;
                      {"Demo"}
                    </Button>
                  )} */}
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

