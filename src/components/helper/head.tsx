import React, { useEffect } from 'react';

export const Head: React.FC<any> = (props) => {
  
  useEffect(() => {
    document.title = `Dogs | ${props.title}`
  }, [props])
  return (
    <></>
  );
};
