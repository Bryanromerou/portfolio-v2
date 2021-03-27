import React, { useEffect, useState } from "react";
// import Icon from "./Icon";
// import cssIcon from '../icons/css.png';
// import djangoIcon from '../icons/django.png';
// import expressIcon from '../icons/ExpressJS.png';
// import htmlIcon from '../icons/html.png';
// import mongodbIcon from '../icons/mongodb.png';
// import jsIcon from '../icons/js.png';
// import nodeJsIcon from '../icons/nodejs.png';
// import reactIcon from '../icons/react.png';
// import jqueryIcon from '../icons/jquery.png';
// import postgresIcon from '../icons/postgresql.png';
// import pythonIcon from '../icons/python.webp';

const HeadSection = (props) => {

  return <section id="main" ref={props.reference}>
    <h1 className="main-title animate">
      Hi, I'm Bryan Romero!<br/>
      I am a Full Stack Developer<br/>
    </h1>
  </section>;
};

export default HeadSection;
