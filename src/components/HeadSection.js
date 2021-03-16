import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import cssIcon from '../icons/css.png';

const HeadSection = (props) => {
  const [yOffset, setYOffset] = useState(0);

  const handleScroll = () =>{
    setYOffset(window.pageYOffset);
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener("scroll",handleScroll)
  }, []);

  return <section id="main" ref={props.reference}>
    <div className="parallax_icons">
      <Icon source ={cssIcon} name="CSS" offset={yOffset}/>
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
