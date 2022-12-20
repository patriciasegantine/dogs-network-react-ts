import { useEffect, useState } from 'react';

export const UseResize = () => {
  const [windowSize, setWindowSize] = useState<any>(null)
  
  useEffect(() => {
    function handleWindowResize() {
      const {innerWidth, innerHeight} = window
      
      setWindowSize({innerWidth, innerHeight})
    }
    
    handleWindowResize()
    
    window.addEventListener('resize', handleWindowResize)
    
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  
  return windowSize;
};
