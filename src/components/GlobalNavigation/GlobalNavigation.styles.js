import styled from 'styled-components';
import { Colors, Styles } from '../../themes';

export const Wrapper = styled.div`
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${Styles.globalNavigationHeight};

  background-color: ${Colors.white};
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  max-width: 900px;

`;

export const Tab = styled.div`
  padding: 0 0.5em;
  text-transform: capitalize;

  a {
    color: ${Colors.black};
  }
`;
