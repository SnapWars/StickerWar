import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './GlobalNavigation.styles';
import routes from './routes';

const NonAuthRoutes = [
  {
    label: 'home',
    to: routes.HOME,
  },
  {
    label: 'gallery',
    to: routes.GALLERY,
  },
  {
    label: 'login',
    to: routes.LOGIN,
  },
];

const GlobalNavigation = () => {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        {
          NonAuthRoutes.map(route => (
            <S.Tab key={route.label}>
              <Link to={route.to}>
                {route.label}
              </Link>
            </S.Tab>
          ))
        }
      </S.InnerWrapper>
    </S.Wrapper>
  )
};

export default GlobalNavigation;
