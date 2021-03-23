import React, { useEffect, useState } from 'react';

const Icon = (props) => {
  const [styles, setStyles] = useState({});
  useEffect(()=>{
    setStyles({
      top:`${props.top}vh`,
      left:`${props.left}vw`,
      transform:`translateY(${props.offset*.3}px)`,
    })
  },[])
  return (
    <>
      <img style={styles} src={props.source} alt={props.name} className="parallax_logo fade-in-slower"/>
    </>
  );
}

export default Icon;
