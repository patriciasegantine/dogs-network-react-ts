import styled from "styled-components";
import { Link } from "react-router-dom";
import { scaleUpAnimation } from "../../animation.styles";
import { XCircle } from "phosphor-react";

export const PhotoContainer = styled.section`
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
  animation: ${scaleUpAnimation} .5s forwards;

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

export const PhotoContainerUrl = styled.div`
  margin: 50px auto;
  place-items: center;
  padding: 4rem 10rem;

  section {
    grid-template-columns: 1fr;
    height: auto;
    place-items: center;
    margin: 0 auto;

  }

  img {
    grid-row: 1;
    border-radius: .4rem;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  div {
    padding: 0;
    width: 100%;
    line-height: 1.5;
  }

  ul, form {
    width: 100%;
    padding: 0;

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

export const ButtonDeletePhoto = styled.button`
  background: ${({theme}) => theme['gray-200']};
  padding: .3rem .6rem;
  line-height: 1;
  font-size: .875rem;
  font-family: ${({theme}) => theme['type-first']};
  border: 1px solid transparent;
  border-radius: .4rem;
  transition: .1s;
  cursor: pointer;

  &:hover, &:focus {
    outline: none;
    border-color: var(--yellow-500);
    background: var(--white);
    box-shadow: 0 0 0 1px #fea;
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
  color: ${({theme}) => theme['gray-400']};

  &:hover, &:focus {
    outline: none;
    color: var(--yellow-500);
  }
`

export const CommentContainer = styled.ul`
  overflow-y: auto;
  word-break: break-word;
  padding: 0 2rem;
`

export const CommentContent = styled.span`
  margin-left: .5rem;
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
    border-color: ${({theme}) => theme['gray-100']};
    background: ${({theme}) => theme['white']};
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
