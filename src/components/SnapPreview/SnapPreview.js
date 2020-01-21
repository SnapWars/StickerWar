import React from 'react';
import * as S from './SnapPreview.styles';
import SnapMedia from '../common/SnapMedia';

export default function SnapPreview({
  src = '',
}) {
  return (
    <S.Wrapper>
      <SnapMedia src={src} />
    </S.Wrapper>
  );
}
