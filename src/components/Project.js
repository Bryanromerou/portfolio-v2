import React from 'react';

const Project = (props) => {
  console.log(props)

  return (
    <div className="project">
      <h1>{props.name}</h1>
      <p>{props.description}</p>

      <div className="project-carousel">
        {props.images.map((image,index)=>{
          return (
            <img key={index}
              src={image}
              className="project-image"
              alt={`${props.name} ${index}`}
            />)
        })}
      </div>
      
    </div>
  );
}

export default Project;
