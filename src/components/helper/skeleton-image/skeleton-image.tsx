import React, { useState } from 'react';
import { SkeletonContainer, SkeletonImg } from "./skeleton-image.styles";

export const SkeletonImage: React.FC<any> = ({...props}) => {
  
  const [skeleton, setSkeleton] = useState<boolean>(true)
  
  function handleLoad(event: any) {
    setSkeleton(false)
    event.target.style.opacity = 1
  }
  
  return (
    <>
      {skeleton && <SkeletonContainer/>}
      <SkeletonImg {...props} onLoad={handleLoad}/>
    </>
  
  );
};
