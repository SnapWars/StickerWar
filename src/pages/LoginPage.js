import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Fonts } from '../themes';
import { brandVariants, brandSizes } from '../constants/brand';
import { PageWrapper, Brand, TextInput } from '../components/common'

const pageWrapperStyles = css`
  align-items: center;
`;

const Title = styled.div`
  font-size: ${Fonts.sizeSubtitle};
`;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PageWrapper
      customStyles={pageWrapperStyles}
    >
      <Brand
        size={brandSizes.MEDIUM}
        variant={brandVariants.LIMO}
      />
      <Title>
        Login to SnapChat
      </Title>
      <TextInput
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />      
    </PageWrapper>
  );
}

export default LoginPage;
