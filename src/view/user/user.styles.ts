import styled from "styled-components";
import { ButtonPrimary } from "../../global.styles";

export const HeaderNavBar = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 2rem 0;
  position: relative;

`

export const NavBar = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: .2rem;
    background: var(--gray-100);
    border-radius: .2rem;
    border: 1px solid transparent;
    transition: .1s;
    cursor: pointer;
    height: 40px;
    width: 40px;

    &:hover, &:focus {
      background: var(--white);
      outline: none;
      border-color: var(--yellow-900);
      box-shadow: 0 0 0 3px var(--gray-100)
    }

    &.active {
      background: var(--white);
      outline: none;
      border-color: var(--yellow-500);
      box-shadow: 0 0 0 3px var(--yellow-200);
      color: var(--yellow-500);
    }
  }

`

export const ButtonSignOut = styled(ButtonPrimary)`

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--black-color);
  color: var(--white);
  padding: 0.4rem 0.6rem;
  min-width: auto;
  height: 40px;
  width: 40px;
  margin: 0;
`
