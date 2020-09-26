import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ImSpinner2 } from 'react-icons/im';

function Spinner() {
  return (
    <Wrapper>
      <SpinnerIcon />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Spin = keyframes`
  from {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  to {
     transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
`;

const SpinnerIcon = styled(ImSpinner2)`
  font-size: 26px;
  color: var(--light-blue);
  animation: ${Spin} 1s infinite linear;
`;

export default Spinner;
