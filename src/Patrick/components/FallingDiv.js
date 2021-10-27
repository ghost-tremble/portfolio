import React, { useState } from "react";
import { motion } from "framer";
import { fallingVariants, yoyoVariants } from "../animations/animate";
const FallingDiv = ({ active, yoyo }) => {
  return (
    <div className="falling-container">
      <motion.div
        variants={active ? fallingVariants : yoyoVariants}
        animate={`${active ? "visible" : "invisible"}`}
        transition={{
          duration: 0.6,
          delay: 1,
        }}
        className="falling"></motion.div>
      <motion.div
        variants={active ? fallingVariants : yoyoVariants}
        animate={`${active ? "visible" : "invisible"}`}
        transition={{
          duration: 0.6,
          delay: 0.6,
        }}
        className="falling"></motion.div>
      <motion.div
        variants={active ? fallingVariants : yoyoVariants}
        animate={`${active ? "visible" : "invisible"}`}
        transition={{
          duration: 0.6,
          delay: 0.4,
        }}
        className="falling"></motion.div>
      <motion.div
        variants={active ? fallingVariants : yoyoVariants}
        animate={`${active ? "visible" : "invisible"}`}
        transition={{
          duration: 0.6,
          delay: 0.1,
        }}
        className="falling"></motion.div>
    </div>
  );
};

export default FallingDiv;
