import React from 'react';
import logo from '../icons/personalLogo.svg';
import { Link } from "react-scroll";

const Navbar = (props) => {
  return (
    <nav className={props.dark?"dark-nav":"light-nav"}>
      <div className="navbar-logo">
        <Link smooth={true} to="main" className="nav-link"><img src={logo} alt="BryanRomero" className="personalLogo"/></Link>
      </div>
      <div className="navbar-links">
        <Link smooth={true} activeClass="active" spy={true} to="projects" className="nav-link">Projects</Link>
        <Link smooth={true} activeClass="active" spy={true} to="experience"  offset={-60} className="nav-link">Experience</Link>
        <Link smooth={true} activeClass="active" spy={true} to="education" offset={-60} className="nav-link">Education</Link>
      </div>
    </nav>
  );
}

export default Navbar;
