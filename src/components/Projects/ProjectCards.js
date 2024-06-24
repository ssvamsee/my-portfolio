import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" data-aos={props.aos}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{paddingBottom:"10%", fontSize:"3vh"}}><span className="purple">{props.title}</span></Card.Title>
        <Card.Text style={{ textAlign: "justify", paddingBottom:"10%", wordBreak:"break-word", hyphens:"auto"}}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank" >
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ 
              marginLeft: "-40px",
              position: "absolute",
              bottom: "10px", // Adjust bottom position as needed
            }}         
           >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
