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
  padding: 1rem 0;

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
  position: fixed;
  right: 10px;
  top: 10px;
  color: ${({theme}) => theme['gray-400']}
`

export const CommentContainer = styled.div`
  overflow-y: auto;
  word-break: break-word;
  padding: 0 2rem;
`

export const CommentContent = styled.span`
  margin-left: .5rem;
`

export const PhotoComment = styled.div`
  padding: .3rem 2rem;
  overflow-y: auto;
`
export const CommentItem = styled.div`
  padding-bottom: .5rem;

`
export const CommentAuthor = styled.b`

`

export const CommentForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;

`
export const CommentTextArea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-family: ${({theme}) => theme['type-first']};
  resize: none;
  border: 1px solid ${({theme}) => theme['gray-100']};
  padding: .5rem;
  border-radius: .4rem;
  background: ${({theme}) => theme['gray-100']};
  transition: .2s;

  &::placeholder {
    //padding-top: .5rem;
    //padding-left: .5rem;
  }

  &:hover, &:focus {
    outline: none;
    border-color: var(--yellow-500);
    background: var(--white);
    box-shadow: 0 0 0 1px #fea;
  }



`
export const CommentButton = styled.button`
  border: none;
  padding: .5rem;
  color: ${({theme}) => theme['black-200']};
  background: transparent;
  font-size: 2rem;
  cursor: pointer;

  &:hover, &:focus {
    outline: none;
    color: var(--yellow-500);
  }
`
