import React from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../components/common';
import { TestSnaps } from '../themes';
import SnapPreview from '../components/SnapPreview';

const Previews = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


const GalleryPage = () => {
  return (
    <PageWrapper>
      <Previews>
        {TestSnaps.map(src => (
          <SnapPreview key={src} src={src} />
        ))}
      </Previews>
    </PageWrapper>
  );
}

export default GalleryPage;
