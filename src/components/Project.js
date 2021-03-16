import React, { useEffect } from 'react';
import useElementOnScreen from '../hooks/useElementOnScreen';

const Project = (props) => {
  const [ containerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1
  })
  useEffect(()=>{isVisible ? console.log(containerRef.current): console.log("")})
  const image = (<div className="split project-images">
                    <img
                      src={props.images[0]}
                      className="project-image"
                      alt="project"
                      />
                  </div>)

  return (
    <div ref={containerRef} className={`project${props.inverse? "" : " reg-wrap"}`}>
      {props.inverse && image}
      <div className="split project-words">
        <div className = "project-description">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>

        <div className="project-description-links">
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            Visit Github <i className="fab fa-github"></i>
          </a>
          <a href={props.live_link} target="_blank" rel="noopener noreferrer">
            Visit Deployed Site<i className="fas fa-satellite-dish"></i>
          </a>
        </div>
      </div>
      {!props.inverse && image}
      
      {/* <div className="project-carousel">
        {props.images.map((image,index)=>{
          return (
            <img key={index}
              src={image}
              className="project-image"
              alt={`${props.name} ${index}`}
            />)
        })}
      </div> */}

    </div>
  );
}

export default Project;
