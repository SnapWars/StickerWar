import React from 'react';
import * as S from './PageWrapper.styles';

const PageWrapper = ({
  children,
  customStyles = ''
}) => (
  <S.Wrapper customStyles={customStyles}>
    {children}
  </S.Wrapper>
);

export default PageWrapper;
