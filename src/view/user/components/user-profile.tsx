import React from 'react';
import { useParams } from "react-router-dom";
import { Feed } from "../../../components/feed/feed";
import { Container, Section, Title } from "../../../global.styles";

export const UserProfile = () => {
  const {user} = useParams()
  return (
    <Container>
      <Title>{user}</Title>
      <Feed user={user}/>
    </Container>
  );
};
