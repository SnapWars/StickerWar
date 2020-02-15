import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../components/common';
import { TestSnaps } from '../themes';
import SnapPreview from '../components/SnapPreview';
import SnapFullView from '../components/SnapFullView';

const Previews = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GalleryPage = () => {
  const [activeSnap, setActiveSnap] = useState({ id: '', src: '' });
  const [isSnapViewActive, setIsSnapViewActive] = useState(false);

  useEffect(() => {

  }, []);

  return (
    <PageWrapper>
      {
        isSnapViewActive &&
        <SnapFullView
          isActive={isSnapViewActive}
          id={activeSnap.id}
          src={activeSnap.src}
          onClose={() => setIsSnapViewActive(false)}
        />
      }
      <Previews>
        {TestSnaps.map((snap) => (
          <SnapPreview
            key={snap.id}
            src={snap.src}
            onClick={() => {
              console.debug('click');
              setActiveSnap(snap);
              setIsSnapViewActive(true);
            }}
          />
        ))}
      </Previews>
    </PageWrapper>
  );
}

export default GalleryPage;
