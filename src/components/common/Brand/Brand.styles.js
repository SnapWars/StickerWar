import styled from 'styled-components';
import { brandSizes } from '../../../constants/brand';

export const Wrapper = styled.div`
  width: ${props => {
    switch(props.size) {
      case brandSizes.LARGE: {
        return '25em';
      }
      case brandSizes.MEDIUM: {
        return '15em';
      }
      default: {
        return '5em';
      }
    };
  }};
  height: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
