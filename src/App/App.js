import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Fonts } from '../themes';

import HomePage from '../pages/HomePage';
import GalleryPage from '../pages/GalleryPage';

const Wrapper = styled.div`
  display: flex;
`;

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${Fonts.family};
    font-size: 1em;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <HomePage />
      <GalleryPage />
    </Wrapper>
  );
}

export default App;
