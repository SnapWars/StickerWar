import React from 'react';
import * as S from './SnapPreview.styles';
import SnapMedia from '../common/SnapMedia';

export default function SnapPreview({
  src = '',
  onClick = () => { },
}) {
  return (
    <S.Wrapper onClick={(e) => onClick(e)}>
      <SnapMedia src={src} />
    </S.Wrapper>
  );
}
