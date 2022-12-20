import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderNavBar = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 2rem 0;
  position: relative;
`

export const NavBar = styled.nav<{ isMobile: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 40rem) {
    display: ${props => props.isMobile ? 'block' : 'none'};
    position: absolute;
    top: 50px;
    right: 0;
    padding: 0 1rem;
    background: ${({theme}) => theme['white']};
    box-shadow: 0 1px 2px 3px rgba(0, 0, 0, .2);
    border-radius: .2rem;
    transform: translateX(-10px) ;
    opacity: 1;

    .active {
      transition: .3s;
      transform: initial;
      opacity: 1;
      z-index: 100;
    }

  }
`

export const Links = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .2rem;
  background: ${({theme}) => theme['gray-100']};
  border-radius: .2rem;
  border: 1px solid transparent;
  transition: .1s;
  cursor: pointer;
  height: 40px;
  width: 40px;

  &:hover, &:focus {
    background: ${({theme}) => theme['white']};
    outline: none;
    border-color: ${({theme}) => theme['yellow-900']};
    box-shadow: 0 0 0 3px ${({theme}) => theme['gray-100']}
  }

  &.active {
    outline: none;
    background: ${({theme}) => theme['white']};
    border-color: ${({theme}) => theme['yellow-500']};
    box-shadow: 0 0 0 3px ${({theme}) => theme['yellow-200']};
    color: ${({theme}) => theme['yellow-500']};
  }

  @media (max-width: 40rem) {
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    background: ${({theme}) => theme['white']};
    color: ${({theme}) => theme['black-200']};
    border-bottom: 1px solid ${({theme}) => theme['gray-100']};
    height: auto;
    width: auto;
    padding: .5rem 0;

    &:hover, &:focus {
      border-color: transparent;
      box-shadow: none;
      opacity: .7;
    }

    &.active {
      border-color: transparent;
      border-bottom: 1px solid ${({theme}) => theme['gray-100']};
      box-shadow: none;
    }
`

export const SignOutLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .2rem;
  background: ${({theme}) => theme['gray-100']};
  border-radius: .2rem;
  border: 1px solid transparent;
  transition: .1s;
  cursor: pointer;
  height: 40px;
  width: 40px;

  &:hover, &:focus {
    background: ${({theme}) => theme['white']};
    outline: none;
    border-color: ${({theme}) => theme['yellow-900']};
    box-shadow: 0 0 0 3px ${({theme}) => theme['gray-100']}
  }

  @media (max-width: 40rem) {
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    background: ${({theme}) => theme['white']};
    color: ${({theme}) => theme['black-200']};
    border-bottom: 1px solid ${({theme}) => theme['gray-100']};
    height: auto;
    width: auto;
    padding: .5rem 0;

    &:hover, &:focus {
      border-color: transparent;
      box-shadow: none;
      opacity: .7;
    }
`

export const MobileButton = styled.button <{ isMobile: boolean }>`
  background: ${props => props.isMobile ? '#fff' : '#333'};
  color: ${props => props.isMobile ? '#333' : '#fff'};
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.6rem;
  min-width: auto;
  height: 40px;
  width: 40px;
  margin: 0;
  cursor: pointer;
  transition: .3s ease;
`
