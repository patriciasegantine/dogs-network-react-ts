import styled from "styled-components";
import { Link } from "react-router-dom";
import { animaLeft } from "../../animation.styles";
// @ts-ignore
import loginImg from "../../assets/img-login.jpg"

export const FormsLogin = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
  gap: 2rem;

  &:before {
    content: '';
    display: block;
    background: url(${loginImg}) no-repeat center center;
    background-size: cover;
    margin-top: -10rem;
  }

  @media (max-width: 45rem) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 30rem;
    margin: 10rem auto;

    &:before {
      display: none;
    }
  }
`

export const SectionLogin = styled.section`
  margin-top: 20vh;
  position: relative;
  animation: ${animaLeft} .3s forwards;
  transform: translateX(-30px);
  opacity: 0;
`

export const SignUp = styled.div`
  display: flex;
  gap: .5rem;
  margin-top: 20vh;
  margin-bottom: 2rem;
`

export const ForgotPassword = styled(Link)`
  color: ${({theme}) => theme['gray-400']};
  padding: .1rem 0;
  margin-right: 0;
  position: absolute;
  right: 0;

  &:hover, &:focus {
    outline: none;
    color: ${({theme}) => theme['yellow-500']};
    background: var(--white);
  }
`

export const CreateButton = styled(Link)`
  display: inline-block;
  color: ${({theme}) => theme['gray-400']};

  &:hover, &:focus {
    outline: none;
    color: ${({theme}) => theme['yellow-500']};
    background: ${({theme}) => theme['white']};
  }
`
