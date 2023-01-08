import styled from "styled-components";
import { skeletonAnimation } from "../../../animation.styles";

export const SkeletonWrapper = styled.div`
  display: grid;

`

export const SkeletonImg = styled.img`
  display: block;
  max-width: 100%;
  grid-area: 1/1;
  opacity: 0;
  transition: .2s;
  

`
export const SkeletonContainer = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-size: 200%;
  animation: ${skeletonAnimation} 1.5s infinite;
`
