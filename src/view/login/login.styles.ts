import styled from "styled-components";
import { Link } from "react-router-dom";
// @ts-ignore
import loginImg from "../../assets/login.jpg"

export const FormsLogin = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
  gap: 2rem;
  margin-top: 10rem;

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

export const SignUp = styled.div`
  display: flex;
  gap: .5rem;
  margin-top: 6rem;
  margin-bottom: 2rem;
`

export const ForgotPassword = styled(Link)`
  display: block;
  text-align: right;
  color: ${({ theme }) => theme['gray-400']};
  padding: .1rem 0;

  &::after {
    content: '';
    display: block;
    position: absolute;
    background: ${({ theme }) => theme['gray-400']};
    right: 0;
    height: 1px;
    width: 130px;
    border-radius: .2rem;
  }

  &:hover {
    opacity: .6;
  }
`

export const CreateButton = styled(Link)`
  display: inline-block;
  color: var(--gray-400);

  &::after {
    content: '';
    display: flex;
    background: ${({ theme }) => theme['gray-400']};
    height: 1px;
    width: 100%;
    border-radius: .2rem;
  }

  &:hover {
    opacity: .8;
  }
`
