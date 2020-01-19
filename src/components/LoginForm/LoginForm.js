import React, { useState } from 'react';
import * as S from './LoginForm.styles';
import { Button, TextInput } from '../common';

export default function LoginForm({
  onSubmit = () => { },
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <S.Wrapper>
      <S.Field>
        <S.FieldLabel>Username</S.FieldLabel>
        <TextInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </S.Field>
      <S.Field>
        <S.FieldLabel>Password</S.FieldLabel>
        <TextInput
          value={password}
          password
          onChange={(e) => setPassword(e.target.value)}
        />
      </S.Field>
      <Button
        label='Login'
        onClick={() => {
          onSubmit(username, password);
          setUsername('');
          setPassword('');
        }}
      />
    </S.Wrapper>
  )
}
