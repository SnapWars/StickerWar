import React from 'react';
import styled, { css } from 'styled-components';
import { PageWrapper, Brand } from '../components/common';
import { brandSizes, brandVariants } from '../constants/brand';

const pageWrappeStyles = css`
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 5em;
`;

const HomePage = () => {
  return (
    <PageWrapper customStyles={pageWrappeStyles}>
      <Brand
        size={brandSizes.LARGE}
        variant={brandVariants.ORIGINAL}
      />
      <Title>
        SnapWars
      </Title>
    </PageWrapper>
  );
}

export default HomePage;
