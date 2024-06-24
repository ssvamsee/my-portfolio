import { useState } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Particle from "../Particle";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [formData, setFormData] = useState(initialState);
  // const baseUrl = `https://ssvamsee.github.io/cloud2labs`

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setFormData(initialState);
//   const notify = () => toast.success("Message Sent Successfully!");


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_mm4kpug", "template_m8d7e3u", e.target, "jf3VjaUQUiTAMzRwx")
      .then(
        (result) => {
          console.log(result.text);
        //   notify();
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container fluid className="about-section" id="contact">
      <Particle />
      <Container>
        <Row className="align-items-center">
          {/* <ToastContainer /> */}

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img data-aos="fade-down-right" src='Assets/contact.svg' alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div data-aos="fade-down-left">
                  <h2>Get In <span className="highlghter">Touch</span></h2>
                  <form name="sentMessage" validate onSubmit={handleSubmit}>
                    <div className="row">
                      <div>
                        <div className="form-group">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Please Enter Your Full Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div>
                        <div className="form-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Please Enter Your Email To Contact"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="4"
                        placeholder="Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div id="success"></div>
                    <button type="submit" className="btn btn-custom btn-lg">
                      <span className="highlghter">Send Message</span>
                    </button>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Contact