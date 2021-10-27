import React from "react";
import { Link, animateScroll as scroll } from "react-scroll/modules";
import "../css/about.css";
import image from "../images/abou.jpg";
const About = () => {
  return (
    <div name="about" id="about" className="about-section row ">
      <div className="about-image col-md-6">
        <div className="about-image-box">
          <img className="about-image" src={image}></img>
        </div>
      </div>
      <div className="about-image col-md-6">
        <div className="about-image-text">
          <h1> About me</h1>
          <p>
            Hi there am patrick i build responsive and interactive websites and
            android applications started programming since 2018, i have 4yrs
            experience in building fullstack applications on the web and mobile
            check out my services down below{" "}
          </p>
          <p></p>
          <div className="">
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-60}
              duration={600}>
              <button className="custom-btn custom">
                Services<i class="bi bi-arrow-down-short trans"></i>
              </button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
