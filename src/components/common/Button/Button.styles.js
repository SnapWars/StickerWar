import styled from 'styled-components';
import { Colors } from '../../../themes';


export const Wrapper = styled.div`
  width: 100%;
  height: 2em;

  border: solid 0.1em ${Colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  letter-spacing: 1px;

  ${props => props.customStyles}
`;
