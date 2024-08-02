"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const WordAnimation = () => {
  return (
    <span>
      <TypeAnimation
        sequence={[1000, " Petroleum", 2000, " Software", 2000, " Data", 2000]}
        speed={50}
        className="text-accent"
        wrapper="span"
        repeat={Infinity}
      />
    </span>
  );
};

export default WordAnimation;
