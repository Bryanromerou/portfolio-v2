import React, { useEffect, useState } from 'react';

const Icon = (props) => {
  const [styles, setStyles] = useState({});
  useEffect(()=>{
    setStyles({
      width:"100px",
      height:"100px",
      transform:`translateY(${props.offset*.3}px) `,
    })
  },[])
  return (
    <>
      <img style={styles} src={props.source} alt={props.name} className="parallax_logo"/>
    </>
  );
}

export default Icon;
