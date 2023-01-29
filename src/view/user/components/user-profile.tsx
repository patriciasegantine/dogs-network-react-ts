import React from 'react';
import { useParams } from "react-router-dom";
import { Feed } from "../../../components/feed/feed";
import { Container, Title } from "../../../global.styles";
import { Head } from "../../../components/helper/head";

export const UserProfile = () => {
  const {user} = useParams()
  return (
    <Container>
      <Head title={user}/>
      <Title>{user}</Title>
      <Feed user={user}/>
    </Container>
  );
};
