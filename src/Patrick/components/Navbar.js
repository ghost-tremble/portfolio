import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/navbar.css";
import navbarData from "../data/navbar-data";
import { Link, animateScroll as scroll } from "react-scroll";
import MenuIcon from "./MenuIcon";
import { motion } from "framer";

export const Navbar = ({ setYoyo, setActive, showNav, setShowNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navData, setNavData] = useState(navbarData);
  return (
    <div>
      <nav>
        <div className="nav-header">
          <div style={{ display: "flex", marginRight: "auto" }}>
            <h1>
              <div className="animate"></div>
              Patrick
            </h1>
          </div>

          <div>
            <i class="show-nav">
              <MenuIcon
                setShowNav={setShowNav}
                setActive={setActive}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
              />
            </i>
          </div>
        </div>

        <div className="link1"></div>
      </nav>

      <div
        className={`${
          showNav ? "overlay overlay-show" : "overlay overlay-reverse"
        }`}>
        <ul>
          {navData.map((data) => {
            const { name, Path } = data;
            return (
              <li>
                <Link
                  to={Path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  onClick={() => {
                    setShowNav(false);
                    setActive(false);
                    setIsOpen(false);
                  }}>
                  {name}
                </Link>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
