import { useEffect, useState } from 'react';

export const UseMedia = (media: any) => {
  
  const [match, setMatch] = useState<any>(null)
  
  useEffect(() => {
    function changeMatch() {
      const {matches} = window.matchMedia(media)
      setMatch(matches)
    }
    
    changeMatch()
    window.addEventListener("resize", changeMatch)
    
    return () => {
      window.removeEventListener('resize', changeMatch)
    }
    
  }, [media])
  
  return match;
};
