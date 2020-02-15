import React, { useState, useEffect, useRef } from 'react';
import * as S from './SnapMedia.styles';

export default function SnapMedia({
  src = '',
  onLoad = () => { },
  /**
   * for video snaps
   */
  shouldPlay = true,
}) {
  return (
    <S.Wrapper>
      testestest
      {
        isImageUrl(src) &&
        <S.Image
          src={src}
          onLoad={onLoad}
        />
      }
      {
        isVideoUrl(src) &&
        <Video src={src} onLoad={onLoad} />
      }
    </S.Wrapper>
  )
}

function Video({
  src = '',
  onLoad = () => { },
  shouldPlay = true,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isLoaded && shouldPlay) {
      videoRef.current.play();
    }
  }, [isLoaded, shouldPlay]);

  return (
    <S.Video
      ref={videoRef}
      src={src}
      loop
      onCanPlayThrough={() => {
        setIsLoaded(true);
        onLoad();
      }}
    >
      Video format is not supported in your browser
        </S.Video>
  )
}

function isImageUrl(url) {
  return url.toLowerCase().match(/.(jpg|jpeg|png|gif)$/i);
}

function isVideoUrl(url) {
  return url.toLowerCase().match(/.(mp4|webm|ogg)$/i);
}
