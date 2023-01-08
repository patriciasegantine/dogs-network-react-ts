import styled from "styled-components";

export const FeedContainer = styled.div`

`

export const FeedImgContainer = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const FeedImgItem = styled.span`

  display: grid;
  border-radius: .4rem;
  overflow: hidden;
  cursor: pointer;


  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;


    @media (max-width: 40rem) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  &:hover {
    span {
      display: flex;
    }
  }
`

export const FeedImg = styled.img`
  grid-area: 1/1;
  width: 100%;
  height: 100%;
`

export const FeedViews = styled.span`
  display: none;
  align-items: center;
  justify-content: center;
  gap: .2rem;
  background: rgba(0, 0, 0, .3);
  color: ${({theme}) => theme['white']};
  font-size: 1rem;
  text-align: center;
  grid-area: 1/1;
`

export const FeedModalContainer = styled.div`
  position: fixed;
  display: flex;
  inset: 0;
  background: rgba(0, 0, 0, .4);
  z-index: 1000;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;

  @media (max-width: 40rem) {
    padding: 2rem calc(2rem + 15px) 2rem 2rem;
  }
`
