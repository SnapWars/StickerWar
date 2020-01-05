import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Fonts, Styles } from '../themes';
import { brandVariants, brandSizes } from '../constants/brand';
import { PageWrapper, Brand, TextInput } from '../components/common'

const pageWrapperStyles = css`
  align-items: center;
  justify-content: center;
  margin-top: -${Styles.globalNavigationHeight};
`;

const Title = styled.div`
  font-size: ${Fonts.sizeSubtitle};
  margin-bottom: 1em;
`;

const LoginForm = styled.form`
  width: 20em;
`;

const textInputStyle = css`
  margin: 1em 0;
  width: 100%;
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
        Login to Snapchat
      </Title>
      <LoginForm>
        <TextInput
          value={username}
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
          customStyles={textInputStyle}
        />
        <TextInput
          value={password}
          placeholder='password'
          password
          onChange={(e) => setPassword(e.target.value)}
          customStyles={textInputStyle}
        />      
      </LoginForm>
    </PageWrapper>
  );
}

export default LoginPage;
