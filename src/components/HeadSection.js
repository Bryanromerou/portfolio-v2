import React from "react";

const HeadSection = (props) => {
  return <section id="main" ref={props.reference}>
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
