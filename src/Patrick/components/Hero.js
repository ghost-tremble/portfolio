import React from "react";
import { motion } from "framer";
import { ReactComponent as ReactLogo } from "../images/blob-haikei (2).svg";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero-section  row " id="hero">
      <div className="content col-lg-6 col-md-6  order-2  order-md-1">
        <h4>
          <span className="dash"></span>Hi
        </h4>
        <h1>
          I'm nwAkAze <span className="animate">pAtricK</span>
        </h1>
        <p>FULLSTACK WEB DEVELOPER and ANDROID DEVELOPER </p>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}>
          <button className="custom-btn custom">
            About me<i class="bi bi-arrow-down-short trans"></i>
          </button>
        </Link>{" "}
      </div>
      <div
        className="svg-image col-lg-6 col-md-6 order-1 order-md-2"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <ReactLogo className="blob"></ReactLogo>
      </div>
    </div>
  );
};

export default Hero;
