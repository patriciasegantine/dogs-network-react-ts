import React from 'react';
// @ts-ignore
import img from '../../../assets/no-data-img.jpg'
import { NoDataContainer } from "./no-data.styles";

export const NoData: React.FC<any> = ({text}) => {
  return (
    <NoDataContainer>
      <p>{text}</p>
      <img src={img} alt=""/>
    </NoDataContainer>
  );
};
