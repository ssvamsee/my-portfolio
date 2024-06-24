import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact/Contact";
import AOS from 'aos'
import 'aos/dist/aos.css';



const resumePage = ["resume"]
const currentPage = window.location.href.split('#')[1]
let isResume = resumePage.includes(currentPage) ? true : false

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentPage) {
      const section = document.getElementById(currentPage);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  })

  useEffect(() => {
    AOS.init({
      duration : 2000,
    });
    AOS.refresh();
  },[]);

  window.addEventListener('scroll', () => {
    AOS.init({
      duration : 2000
    });
  })

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar showResume={isResume}/>
        {!isResume && <Home />}
        {!isResume && <About />}
        {!isResume && <Projects />}
        {!isResume && <Contact />}
        {isResume && <ResumePage />}

        {/* <About />
        <Projects />
        <Resume />
        <Contact />
        <ScrollToTop /> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes> */}
        <Footer />
      </div>
    </Router>
  );
}

function ResumePage() {
  if (isResume) {
    return (
      <div id='resume'>
        <Resume />
        <Contact/>
        {/* <Articles /> */}
      </div>
    );
  }
  return null;
}

function HomePages() {
  if (isResume) {
    return (
      <div id='home'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
  return null;
}

export default App;
