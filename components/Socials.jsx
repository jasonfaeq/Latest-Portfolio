import React from "react";
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/jasonfaeq" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/jasonfaeq/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@Jason-Faeq" },
  { icon: <FaTwitter />, path: "https://x.com/jasonfaeq" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
