import React from 'react';
import styled from 'styled-components';

import GlobalStyles from './GlobalStyles';
import Routes from "../routes/Index";
import Sidebar from './Sidebar';

import useSockets from '../hooks/useSockets';

function App() {
  useSockets();

  return (
    <>
      <GlobalStyles />
      <Main>
        <Routes>
          <Sidebar />
        </Routes>
      </Main>
    </>
  );
}

const Main = styled.div`
  margin-left: 24vw;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  min-height: 100vh;
  width: var(--main-width);
`;

export default App;
