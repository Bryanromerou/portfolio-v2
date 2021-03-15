import React from 'react';
import logo from '../icons/personalLogo.svg';
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <Link smooth={true} activeClass="active" spy={true} to="projects" className="nav-link">Projects</Link>
      <Link smooth={true} activeClass="active" spy={true} to="experience" className="nav-link">Experience</Link>
      <Link smooth={true} activeClass="active" spy={true} to="education" className="nav-link">Education</Link>
    </nav>
  );
}

export default Navbar;
