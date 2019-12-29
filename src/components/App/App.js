import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Fonts, Colors } from '../../themes';
import GlobalNavigation, { routes } from '../GlobalNavigation';

import HomePage from '../../pages/HomePage';
import GalleryPage from '../../pages/GalleryPage';
import LoginPage from '../../pages/LoginPage';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  height: 100%;
  width: 100%;

  background-color: ${Colors.yellow};
`;

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${Fonts.family};
    font-size: 1em;
  }

  a {
    text-decoration: none;
    color: ${Colors.anchorText};
  }
`;

const App = () => {
  return (
    <Router basename="/">
      <Wrapper>
        <GlobalStyles />
        <GlobalNavigation/>
        <Route exact path={routes.HOME} component={HomePage}/>
        <Route exact path={routes.GALLERY} component={GalleryPage}/>
        <Route exact path={routes.LOGIN} component={LoginPage}/>
      </Wrapper>
    </Router>
  );
}

export default App;
