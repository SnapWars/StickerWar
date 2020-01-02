import React from 'react';
import * as S from './TextInput.styles';

const TextInput = ({
  value = '',
  onChange = () => {},
  customStyles = '',
}) => {
  return (
    <S.Wrapper customStyles={customStyles}>
      <S.Input
        type='text'
        value={value}
        onChange={onChange}
      />
    </S.Wrapper>
  )
};

export default TextInput;
