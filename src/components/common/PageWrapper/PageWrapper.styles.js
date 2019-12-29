import styled from 'styled-components';
import { Styles } from '../../../themes';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: ${Styles.pageWrapperMinHeight};
  height: 100%;
  width: 100vw;

  ${props => props.customStyles}
`;
