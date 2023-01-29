import React from 'react'
import { Feed } from "../../components/feed/feed";
import { Container, Section } from "../../global.styles";
import { Head } from "../../components/helper/head";

export const Home = () => {
  return (
    <Section>
      <Container>
        <Head title={'Photo Feed'}/>
        <Feed user={''}/>
      </Container>
    </Section>
  )
}
