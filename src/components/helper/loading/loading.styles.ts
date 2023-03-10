import styled from "styled-components";

export const LoadingWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
  z-index: 1000;
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, .5);
`
