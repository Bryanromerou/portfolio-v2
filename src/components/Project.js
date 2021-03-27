import React from 'react';
import useElementOnScreenOnce from '../hooks/useElementOnScreenOnce';

const Project = (props) => {
  const [ containerRef, isVisible ] = useElementOnScreenOnce({
    root: null,
    rootMargin: "100px",
    threshold: .7
  })
  const image = (<div className="split project-images">
                    <img
                      src={props.images[0]}
                      className="project-image"
                      alt="project"
                      />
                  </div>)

  return (
    <div ref={containerRef} className={`project fade-in${props.inverse? "" : " reg-wrap"}${isVisible?" appear":""}`}>
      {props.inverse && image}
      <div className="split project-words">
        <div className = "project-description">
          <p className="project-name">{props.name}</p>
          <div className="project-techstack">
            {props.stack.map((tech)=>{
              return(<p className="project-tech">{tech}</p>)
            })}
          </div>
          <p className="project-bio">{props.description}</p>
        </div>

        <div className="project-description-links">
          <a href={props.github} target="_blank" rel="noopener noreferrer" className="project-link">
            Visit Github <i className="fab fa-github"></i>
          </a>
          <a href={props.live_link} target="_blank" rel="noopener noreferrer" className="project-link">
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
