import React, { useEffect, useRef } from 'react';
import * as S from './SnapFullView.styles';
import SnapMedia from '../common/SnapMedia';
import * as Animations from './SnapFullView.animations';

export default function SnapFullView({
  isActive = false,
  src = '',
  onLoad = () => { },
  onClose = () => { },
}) {
  const wrapperEl = useRef(null);

  useEffect(() => {
    if (isActive) {
      Animations.enter(wrapperEl.current);
    } else {
      Animations.exit(wrapperEl.current);
    }
  }, []);

  return (
    <S.Wrapper
      onClick={(e) => onClose(e)}
      ref={wrapperEl}>
      <SnapMedia
        src={src}
        onLoad={onLoad}
      />
    </S.Wrapper>
  );
}
