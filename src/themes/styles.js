import { css } from 'styled-components';

const globalNavigationHeight = '3em';

export default {
  globalNavigationHeight,
  pageWrapperMinHeight: `calc(100vh - ${globalNavigationHeight})`,

  includeSnapDimmensions: (width = '10em') => {
    const heightRatio = 1.9;
    return css`
      width: ${width};
      height: calc(${width} * ${heightRatio});
    `;
  },
}
