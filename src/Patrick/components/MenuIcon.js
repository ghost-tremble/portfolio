import React, { useState } from "react";

// onClick={() => {
//   if (showNav === false) {
//     setShowNav(true);
//     setActive(true);
//   } else if (showNav === true) {
//     setShowNav(false);
//     setActive(false);
//   }
// }}
const MenuIcon = ({ setShowNav, setActive, setIsOpen, isOpen }) => {
  const openNav = () => {
    if (!isOpen) {
      setIsOpen(true);
      setShowNav(true);
      setActive(true);
    } else if (isOpen) {
      setIsOpen(false);
      setShowNav(false);
      setActive(false);
    }
  };
  return (
    <div
      style={{
        padding: "10px",
        width: "70px",
        height: "70px",
        marginRight: "25px",
      }}>
      <div
        onClick={() => {
          openNav();
        }}
        class={`center ${!isOpen ? "center" : "center center-click"}`}>
        <div></div>
      </div>
    </div>
  );
};

export default MenuIcon;
