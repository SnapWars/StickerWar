import styled from 'styled-components';
import { Colors } from '../../themes';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 2.5em;

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
