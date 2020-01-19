import React, { useState } from 'react';
import * as S from './TextInput.styles';

const TextInput = ({
  value = '',
  placeholder = '',
  password = false,
  onChange = () => {},
  customStyles = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <S.Wrapper
      isFocused={isFocused}
      customStyles={customStyles}>
      <S.Input
        type={password ? 'password' : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
    </S.Wrapper>
  )
};

export default TextInput;
