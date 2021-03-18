import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import cssIcon from '../icons/css.png';
import djangoIcon from '../icons/django.png';
import expressIcon from '../icons/ExpressJS.png';
import htmlIcon from '../icons/html.png';
import mongodbIcon from '../icons/mongodb.png';
import jsIcon from '../icons/js.png';
import nodeJsIcon from '../icons/nodejs.png';
import reactIcon from '../icons/react.png';
import jqueryIcon from '../icons/jquery.png';
import postgresIcon from '../icons/postgresql.png';
import pythonIcon from '../icons/python.webp';

const HeadSection = (props) => {
  const [yOffset, setYOffset] = useState(0);

  const handleScroll = () =>{
    setYOffset(window.pageYOffset);
  }
  // useEffect(()=>console.log(yOffset),[yOffset])
  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener("scroll",handleScroll)
  }, []);

  return <section id="main" ref={props.reference}>
    <div className="parallax_icons">
      <Icon source = {cssIcon} name="CSS" top = "15" left="10" offset={yOffset}/>
      <Icon source = {djangoIcon} name="Django"  top = "15" left="80" offset={yOffset}/>
      <Icon source = {expressIcon} name="Express" top = "40" left="80" offset={yOffset}/>
      <Icon source = {htmlIcon} name="HTML" top = "40" left="10" offset={yOffset}/>
      <Icon source = {mongodbIcon} name="MongoDB" top = "80" left="80" offset={yOffset}/>
      <Icon source = {jsIcon} name="JavaScript" top = "80" left="60" offset={yOffset}/>
      <Icon source = {nodeJsIcon} name="NodeJS" top = "80" left="30" offset={yOffset}/>
      <Icon source = {reactIcon} name="React" top = "80" left="10" offset={yOffset}/>
      <Icon source = {jqueryIcon} name="JQuery" top = "60" left="80" offset={yOffset}/>
      <Icon source = {postgresIcon} name="PostgreSQL" top = "15" left="30" offset={yOffset}/>
      <Icon source = {pythonIcon} name="Python" top = "15" left="60" offset={yOffset}/>
    </div>
    <h1 className="main-title">
      Hi, Im Bryan Romero!<br/>
      I am Full Stack Developer,<br/>
      Software Engineer,<br/>
      with a background<br/>
      in Banking Operations
    </h1>
  </section>;
};

export default HeadSection;
