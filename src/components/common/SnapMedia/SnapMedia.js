import React, { useState } from 'react';
import * as S from './SnapMedia.styles';

export default function SnapMedia({
  src = '',
  onLoad = () => { },
}) {
  return (
    <S.Wrapper>
      {
        isImageUrl(src) &&
        <S.Image
          src={src}
          onLoad={onLoad}
        />
      }
      {
        isVideoUrl(src) &&
        <S.Video
          src={src}
          onCanPlayThrough={onLoad}
          autoplay={true}
          controls
        >
          Video format is not supported in your browser
        </S.Video>
      }
    </S.Wrapper>
  )
}

function isImageUrl(url) {
  return url.toLowerCase().match(/.(jpg|jpeg|png|gif)$/i);
}

function isVideoUrl(url) {
  return url.toLowerCase().match(/.(mp4|webm|ogg)$/i);
}
