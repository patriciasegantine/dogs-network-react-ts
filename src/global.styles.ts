import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  padding: 0 1rem;
  margin: 0 auto;
`

export const ErrorMessage = styled.p`
  color: var(--danger);
  font-size: .875rem;
  margin-top: .25rem;
`

export const Title = styled.h1`

  font-family: var(--type-second);
  font-size: 3rem;
  line-height: 1;
  margin: 10rem 0 1rem;
  position: relative;
  z-index: 1;


  &::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--yellow-500);
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: .2rem;
    z-index: -1;
  }`

export const ButtonPrimary = styled.button`
  font-size: 1rem;
  font-family: var(--type-first);
  font-weight: 500;
  border: none;
  border-radius: 0.4rem;
  background: var(--yellow-500);
  color: var(--yellow-900);
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  transition: .1s;
  min-width: 8rem;
  margin: .5rem 0;

  &:hover, &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--yellow-200), 0 0 0 4px var(--yellow-500);
  }

  &:disabled {
    opacity: .5;
    cursor: wait;
  }

`

export const InputWrapper = styled.div`
  margin-bottom: 1rem;`

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: .3rem;

`

export const InputForm = styled.input`

  border: 1px solid var(--ligth-gray);
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: .8rem;
  border-radius: .4rem;
  background: var(--ligth-gray);
  transition: .2s;


  &:focus, &:hover {
    outline: none;
    border-color: var(--yellow-500);
    background: var(--white);
    box-shadow: 0 0 0 1px #fea;
  }
`
