import styled from "styled-components";
import { Link } from "react-router-dom";
import { scaleUpAnimation } from "../../view/animation.styles";
import { XCircle } from "phosphor-react";

export const PhotoContainer = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: .4rem;
  background: ${({theme}) => theme['white']};
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(.8);
  animation: ${scaleUpAnimation} .8s forwards;

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`

export const PhotoImg = styled.div`
  grid-row: 1 / 4;

  @media (max-width: 64rem) {
    grid-row: 1;

  }
`

export const PhotoDetails = styled.div`
  padding: 4rem 2rem 0 2rem;
`
export const PhotoAttributes = styled.div`
  display: flex;
  gap: 3rem;
  margin-right: 2rem;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;

  span::before {
    content: '';
    display: inline-block;
    height: 20px;
    margin-right: .5rem;
    position: relative;
    top: 3px;
    width: 2px;
    background: ${({theme}) => theme['black-200']};
    margin-top: 5px;

  }


`

export const PhotoDetailsHeader = styled.div`
  opacity: .5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LinkAuthor = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`
export const PhotoView = styled.span`
  display: flex;
  align-items: center;
  gap: .2rem;
`

export const CloseButtonModal = styled(XCircle)`
  font-size: 1rem;
  cursor: pointer;
  margin: .5rem;
  position: absolute;
  right: 10px;
  top: 10px;
  color: ${({theme}) => theme['gray-400']}
}

;
`
