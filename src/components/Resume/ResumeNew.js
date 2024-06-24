import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
      <Container fluid className="resume-section" id="resume">
        <Particle />
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href='Assets/Resume.pdf'
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}

        <Row className="resume">
          <Document file='Assets/Resume.pdf' className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
          <Document file='Assets/Resume.pdf' className="d-flex justify-content-center">
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
          <Document file='Assets/Resume.pdf' className="d-flex justify-content-center">
            <Page pageNumber={3} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" , marginBottom:"20px"}}>
          <Button
            variant="primary"
            href='Assets/Resume.pdf'
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <span/>
        <span/>
        <span/>
        <span/>


      </Container>
  );
}

export default ResumeNew;