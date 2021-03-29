import React, { useEffect, useState } from "react";

const HeadSection = (props) => {

  return <section id="main" ref={props.reference}>
    <div className="swipe">
      <h1>Bryan Romero</h1>
    </div>
    <div className="swipe swipe--delay">
      <h3>Full Stack Developer</h3>
    </div>
    {/* <h1 className="main-title animate">
      Hi, I'm Bryan Romero!
      I am a Full Stack Developer
    </h1> */}
  </section>;
};

export default HeadSection;
