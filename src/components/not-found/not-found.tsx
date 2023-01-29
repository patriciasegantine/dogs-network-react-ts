import React from 'react';
import { Container } from "../../global.styles";
import { NoData } from "../helper/no-data/no-data";
import { NotFoundContainer, NotFoundTitle } from "./not-found.styles";

export const NotFound: React.FC<any> = () => {
  return (
    <Container>
      <NotFoundContainer>
        <NotFoundTitle> Error: 404</NotFoundTitle>
        <NoData text={'Sorry, Page not found'}/>
      </NotFoundContainer>
    </Container>
  );
};
