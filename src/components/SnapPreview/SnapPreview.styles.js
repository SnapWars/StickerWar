import styled from 'styled-components';
import { Styles } from '../../themes';

export const Wrapper = styled.div`
  position: relative;
  display: flex;

  ${Styles.includeSnapDimmensions('10em')}

  overflow: hidden;
`;
