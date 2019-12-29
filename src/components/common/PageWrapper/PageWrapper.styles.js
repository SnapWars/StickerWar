import styled from 'styled-components';

export const Wrapper = styled.div`
  border: solid red 1px;
  display: flex;
  flex-direction: column;

  height: 100%;
  min-height: 100vh;
  width: 100vw;

  ${props => props.customStyles}
`;
