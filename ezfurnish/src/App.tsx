import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Footer from './components/Footer';
import HeaderCrausel from './components/HeaderCrausel';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <HeaderCrausel />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
