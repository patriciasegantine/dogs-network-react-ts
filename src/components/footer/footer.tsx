import React from 'react'
import { Container } from '../../global.styles'
import { FooterContainer } from './footer.styles'
import { PawPrint } from "phosphor-react";

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <PawPrint size={25}/>
        <p>Delepoment by Paty Segantine</p>
      </Container>
    </FooterContainer>
  )
}
