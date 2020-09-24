import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import Headbar from './Headbar';
import Tweet from './Tweet';

import { toArray } from '../../utils/index';

function Feed() {
  const tweetFeed = useSelector((state) => state.feed.tweetFeed);

  const { user } = useParams();

  return (
    <Wrapper>
      <Headbar />
      <Main>
        {tweetFeed && toArray(tweetFeed).map(({ id }) => {
          return (
            <Tweet
              key={id}
              id={id}
            />
          );
        })}
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
