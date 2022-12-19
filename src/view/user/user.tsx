import React from 'react';
import { Container, Section } from "../../global.styles";
import { UserHeader } from "./components/user-header";
import { Route, Routes } from "react-router-dom";
import { UserPhotoPost } from "./components/user-photo-post";
import { UserMetrics } from "./components/user-metrics";
import { Feed } from "../../components/feed/feed";

export const User = () => {
  return (
    <Section>
      <Container>
        <UserHeader/>
        
        <Routes>
          <Route
            path={'/'}
            element={<Feed/>}
          />
          
          <Route
            path={'/metrics'}
            element={<UserMetrics/>}
          />
          
          <Route
            path={'/post'}
            element={<UserPhotoPost/>}
          />
        
        </Routes>
      
      </Container>
    </Section>
  );
};
