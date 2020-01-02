import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './GlobalNavigation.styles';
import routes from './routes';
import { Brand } from '../common';
import { brandSizes, brandVariants } from '../../constants/brand';

const NonAuthRoutes = [
  {
    label: 'gallery',
    to: routes.GALLERY,
  },
  {
    label: 'home',
    isBrand: true,
    to: routes.HOME,
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
            route.isBrand ?
              <Link to={route.to}>
                <Brand
                  size={brandSizes.SMALL}
                  variant={brandVariants.SCHEMING}
                />
              </Link>
              :
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
