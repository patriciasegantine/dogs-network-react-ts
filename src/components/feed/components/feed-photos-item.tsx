import React from 'react';

// @ts-ignore
export const FeedPhotosItem: React.FC<any> = ({src, title}) => {
  return (
    <img src={src} alt={title}/>
  )
};
