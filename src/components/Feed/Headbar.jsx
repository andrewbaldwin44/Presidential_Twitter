import React from 'react';
import styled from 'styled-components';

import { USER_DATA } from '../../constants';

function Headbar({ user }) {
  const username = USER_DATA[user];

  return (
    <Wrapper>
      <h2>{username ? `${username}'s Feed` : 'Home Feed'}</h2>
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
