import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {

  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SIDDAM SAI VAMSEE PRASAD </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} >
              <img
                src="Assets/image.svg"
                alt="home pic"
                className="img-fluid"
                // data-aos="fade-down"
                // data-aos-easing="linear"
                // data-aos-duration="3500"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
        {!isScrolling && (
          <div className="field">
            <div className="mouse"></div>
          </div>
        )}
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
