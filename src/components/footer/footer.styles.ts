import styled from "styled-components";

export const FooterContainer = styled.section`
  display: flex;
  background: ${({theme}) => theme['yellow-500']};;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: 6rem;
  text-align: center;
  color: #764701;

  p {
    font-size: .8rem;
    font-style: italic;
  }
`
