import React from 'react';
import * as S from './Button.styles';

export default function Button({
  label = '',
  onClick = () => {},
  customStyles = '',
}) {
  return (
    <S.Wrapper
      onClick={(e) => onClick(e)}
      customStyles={customStyles}
    >
      { label }
    </S.Wrapper>
  )
}
