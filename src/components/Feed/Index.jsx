import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import Headbar from './Headbar';
import Tweet from './Tweet';

import { setTwitterRules } from '../../actions';

function Feed() {
  const dispatch = useDispatch();
  const tweetFeed = useSelector((state) => state.feed.tweetFeed);

  const { user = 'home' } = useParams();

  useEffect(() => {
    dispatch(setTwitterRules(user));
  }, [user, dispatch]);

  return (
    <Wrapper>
      <Headbar />
      <Main>
        {tweetFeed && tweetFeed.map(({ data }) => {
          const { id } = data;

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
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

export default Feed;
