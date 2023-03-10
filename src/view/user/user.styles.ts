import styled from "styled-components";
import { NavLink } from "react-router-dom";

// user-header-nav

export const HeaderNavBar = styled.nav`
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

// user-photo-post

export const PhotoSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 40rem) {
    grid-template-columns:  1fr;
  }
`

export const InputPhoto = styled.input`

  &::file-selector-button {
    background: ${({theme}) => theme['gray-100']};
    border-radius: .2rem;
    border: 1px solid transparent;
    cursor: pointer;
    padding: .6rem .8rem;
    margin-right: .5rem;
    font-family: inherit;
    font-size: .9rem;

    &:hover, &:focus {
      background: ${({theme}) => theme['white']};
      outline: none;
      border-color: ${({theme}) => theme['yellow-900']};
      box-shadow: 0 0 0 3px ${({theme}) => theme['gray-100']}
    }

  }
`

export const ImgPreview = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;

  &::after {
    content: '';
    display: block;
    height: 0;
    padding-bottom: 100%;
  }
`

// user-metrics

export const GraphContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 1rem 0;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`

export const GraphItems = styled.div`
  display: grid;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: .2rem;
  min-height: 25rem;
`

export const GraphAccess = styled(GraphItems)`
  grid-column: 1/3;
  padding: 0 2rem;
  font-size: 1.5rem;
  min-height: 6rem;

  @media (max-width: 40rem) {
    grid-column: 1;
  }
`
