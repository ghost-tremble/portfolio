import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import Cursor from "./components/cursor";
import MenuIcon from "./components/MenuIcon";
import FallingDiv from "./components/FallingDiv";
import OpeningLoader from "./components/openingLoader";

import Services from "./components/Services";
import Modal from "./components/Modal";
import "bootstrap/dist/css/bootstrap.css";
import "./css/main.css";
import "./css/Theme.css";

const App = () => {
  const [active, setActive] = useState(false);
  const [yoyo, setYoyo] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState([]);
  return (
    <>
      <OpeningLoader />
      <FallingDiv active={active} yoyo={yoyo} />
      <Cursor />
      <Navbar
        setActive={setActive}
        setYoyo={setYoyo}
        showNav={showNav}
        setShowNav={setShowNav}
      />

      <Hero />
      <About />
      <Services setIsModalOpen={setIsModalOpen} setModalData={setModalData} />
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalData={modalData}
      />
      <Projects />
      <Contact />

      <Footer />
    </>
  );
};

export default App;
