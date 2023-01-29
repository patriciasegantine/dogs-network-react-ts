import styled from "styled-components";
import { Link } from "react-router-dom";
import { PawPrint } from "phosphor-react";

export const HeaderContainer = styled.header`
  box-shadow: var(--box-shadow);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: #fff;
  top: 0;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: .2rem;
  line-height: 1;

`

export const IconLogo = styled(PawPrint)`
  line-height: 1;
  font-size: 2rem;
`

export const LogoTitle = styled.h3`
  font-family: var(--type-second);
  font-size: 2rem;
  font-weight: 200;
`

export const Login = styled(Link)`
  color: var(--type-first);
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
`
