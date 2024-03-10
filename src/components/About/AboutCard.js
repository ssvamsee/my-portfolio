import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siddam Vamsee </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently employed as a Senior software Engineer at Onpassive.
            <br />
            I completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering from JNTUK.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Surfing Internet
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Unraveling tech's tapestry, forever a student, forever inspired."{" "}
          </p>
          <footer className="blockquote-footer">Vamsee</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
