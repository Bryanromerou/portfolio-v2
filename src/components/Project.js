import React from 'react';
import useElementOnScreenOnce from '../hooks/useElementOnScreenOnce';
import Carousel from './Carousel';

const Project = (props) => {
  const [ containerRef, isVisible ] = useElementOnScreenOnce({
    root: null,
    rootMargin: "100px",
    threshold: .7
  })
  const image = (<Carousel images ={props.images} />)
  const project_description = props.description.map((descrip,index)=>{
    return (<p className="project-bio" key={index}>{descrip}</p>)
  })

  return (
    <div ref={containerRef} className={`project fade-in${props.inverse? "" : " reg-wrap"}${isVisible?" appear":""}`}>
      {props.inverse && image}
      <div className="split project-words">
        <div className = "project-description">
          <p className="project-name">{props.name}</p>
          <div className="project-techstack">
            {props.stack.map((tech)=>{
              return(<p>{tech}</p>)
            })}
          </div>
          {project_description}
        </div>

        <div className="project-description-links">
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            Visit Repo <i className="fab fa-github"></i>
          </a>
          <a href={props.live_link} target="_blank" rel="noopener noreferrer">
            Visit Deployed Site <i className="fas fa-satellite-dish"></i>
          </a>
        </div>
      </div>
      {!props.inverse && image}
    

    </div>
  );
}

export default Project;
