import React, { useState } from "react";
import "../css/modal.css";
import { motion } from "framer";
const Modal = ({ isModalOpen, setIsModalOpen, modalData }) => {
  return (
    <div className={isModalOpen ? "modal-main" : ""}>
      <div className={`modal-container ${isModalOpen ? "modal-scale" : ""}`}>
        <div
          className="cancel-modal"
          onClick={() => {
            setIsModalOpen(false);
          }}>
          <i class="bi bi-x-diamond"></i>
        </div>

        <div className="content-modal container">
          <div className="row">
            <div className="col-sm-12">
              <ul>
                {modalData.map((data) => {
                  return (
                    <li>
                      <p>{data}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
