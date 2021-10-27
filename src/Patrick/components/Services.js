import React, { useState } from "react";
import "../css/services.css";
import services from "../data/serviceData";
import { Link } from "react-scroll";

const Services = ({ setIsModalOpen, setModalData }) => {
  return (
    <div className="services-container container" id="services">
      <div className="text-center service-title">
        <h1>Services</h1>
        <p>what i offer </p>
      </div>
      <div className="row">
        {services.map((service, index) => {
          const { name, description, icon } = service;
          return (
            <div
              key={index}
              className="col-md  col-sm service"
              onClick={() => {
                setIsModalOpen(true);
                setModalData(description);
              }}>
              <div className="service-content">
                <i className="service-icon">{icon}</i>
                <h2>{name}</h2>
              </div>

              <div className="view-modal-btn">
                <a>view more</a>
                <i class="bi bi-arrow-right-short trans-ar"></i>
              </div>
            </div>
          );
        })}

        <div className="next-btn">
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}>
            <button className="custom-btn custom">
              Portfolio<i class="bi bi-arrow-down-short trans"></i>
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Services;
