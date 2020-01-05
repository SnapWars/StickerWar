import styled from 'styled-components';
import { Colors } from '../../../themes';

export const Wrapper = styled.div`
  padding: 0.5em 1em;
  box-sizing: border-box;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${Colors.black};
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
