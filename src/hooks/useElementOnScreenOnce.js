import React, { useRef, useEffect, useState } from "react"

const useElementOnScreenOnce = (options) => {
  const containerRef = useRef(null)
  const [ isVisible, setIsVisible ] = useState(false)

  
  useEffect(() => {
    
    const callbackFunction = (entries) => {
      const [ entry ] = entries
      if(!entry.isIntersecting){
        return;
      }
      else{
        setIsVisible(entry.isIntersecting)
        observer.unobserve(containerRef.current)
      }
    }

    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)
    
    return () => {
      if(containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])

  return [containerRef, isVisible]
}

export default useElementOnScreenOnce;