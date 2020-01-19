import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Fonts, Styles, Colors } from '../themes';
import { brandVariants, brandSizes } from '../constants/brand';
import { PageWrapper, Brand } from '../components/common'
import LoginForm from '../components/LoginForm';

const pageWrapperStyles = css`
  align-items: center;
  justify-content: center;
  margin-top: -${Styles.globalNavigationHeight};
`;

const Title = styled.div`
  font-size: ${Fonts.sizeSubtitle};
  margin-bottom: 1em;
`;

const ErrorMessage = styled.div`
  margin-top: 1em;
  color: ${Colors.red};
`;

export default function LoginPage({

}) {
  const [authError, setAuthError] = useState('');
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
      <LoginForm
        onSubmit={(username, password) => (
          submitForm(username, password)
        )}
      />
      {
        authError && <ErrorMessage>Invalid credentials</ErrorMessage>
      }
    </PageWrapper>
  );
}

function submitForm() {
  console.debug('submit form');
}
