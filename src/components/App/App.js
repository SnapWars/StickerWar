import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Fonts } from '../../themes';
import GlobalNavigation, { routes } from '../GlobalNavigation';

import HomePage from '../../pages/HomePage';
import GalleryPage from '../../pages/GalleryPage';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
    <Router>
      <Wrapper>
        <GlobalStyles />
        <GlobalNavigation/>
        <Route exact path={routes.HOME} component={HomePage}/>
        <Route exact path={routes.GALLERY} component={GalleryPage}/>
      </Wrapper>
    </Router>
  );
}

export default App;
