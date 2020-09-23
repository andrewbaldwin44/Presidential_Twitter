import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import Headbar from './Headbar';

function Feed() {
  const tweetFeed = useSelector((state) => state.feed.tweetFeed);

  const { user } = useParams();

  console.log(tweetFeed)

  return (
    <Wrapper>
      <Headbar />
      <Main>
        <span>{`${user}'s Feed`}</span>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  padding: 20px 40px;
`;

export default Feed;
