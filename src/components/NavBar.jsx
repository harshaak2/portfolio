import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assets/Sh_transparent.png";

export default function NavBar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-24 text-neutral-500" src={logo} alt="image" />
      </div>
      <div className="m-8 flex justify-center items-center gap-4 text-2xl">
        <a
          href="https://linkedin.com/in/sri-harsha-kurra"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="cursor-pointer" />
        </a>
        <a
          href="https://github.com/harshaak2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer" />
        </a>
        {/* <FaTwitter /> */}
      </div>
    </nav>
  );
}
