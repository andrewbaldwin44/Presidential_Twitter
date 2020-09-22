import React from 'react';
import styled from 'styled-components';

function Headbar() {
  return (
    <Wrapper>
      <h2>Header</h2>
      <span role="img" aria-label="emoji">✨</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  font-size: 1.5em;
  font-weight: bold;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid var(--border-color);
`;

export default Headbar;
