import styled from 'styled-components';
import { Colors } from '../../../themes';

export const Wrapper = styled.div`
  padding: 0.5em 0;
  box-sizing: border-box;
  border-width: 0 0 0.1em 0;
  border-style: solid;
  border-color: ${props => props.isFocused ? Colors.blue : Colors.black};

  transition: all 0.3s;
  ${props => props.customStyles}
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  background-color: transparent;
  color: inherit;

  &:focus {
    outline: none;
  }
`;
