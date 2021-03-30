import React from 'react';
import { Link } from "react-scroll";
import PersonalLogo from './PersonalLogo';

const Navbar = ({dark}) => {
  return (
    <nav className={`animate${dark?" dark-nav":" light-nav"}`}>
      <div className="navbar-logo">
        <Link smooth={true} to="main"><PersonalLogo dark={dark}/></Link>
      </div>
      <div className="navbar-links">
        <Link smooth={true} activeClass="active" spy={true} to="projects" className="nav-link">Projects</Link>
        <Link smooth={true} activeClass="active" spy={true} to="experience"  offset={-60} className="nav-link nav_line">Experience</Link>
        <Link smooth={true} activeClass="active" spy={true} to="education" offset={-60} className="nav-link nav_line">Education</Link>
      </div>
    </nav>
  );
}

export default Navbar;
