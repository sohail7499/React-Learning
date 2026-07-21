import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass =
    "text-white hover:text-orange-400 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-orange-400 hover:after:w-full hover:after:left-0 after:transition-all after:duration-300";

  return (
    <>
      <nav className="bg-gray-900 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <span className="text-orange-500 text-xl font-bold">SK</span>
        <ul className="flex gap-6">
          <li>
            <a href="#home" className={navLinkClass}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className={navLinkClass}>
              Skills
            </a>
          </li>
          <li>
            <a href="#project" className={navLinkClass}>
              Project
            </a>
          </li>
          <li>
            <a href="#contect" className={navLinkClass}>
              Contect
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
