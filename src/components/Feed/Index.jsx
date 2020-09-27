import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import Headbar from './Headbar';
import Tweet from './Tweet';
import Spinner from '../Spinner/Index';

import { setTwitterRules } from '../../actions';
import { isEmptyData } from '../../utils/index';

function Feed() {
  const dispatch = useDispatch();
  const { tweetFeed, errorMessage } = useSelector((state) => state.feed);

  const { user = 'home' } = useParams();

  useEffect(() => {
    dispatch(setTwitterRules(user));
  }, [user, dispatch]);

  return (
    <Wrapper>
      <Headbar />
      <Main>
        {isEmptyData(tweetFeed) && errorMessage && (
          <Error>
            {errorMessage}
          </Error>
        )}
        {tweetFeed ? (
          tweetFeed.map(({ data }) => {
            const { id } = data;

            return (
              <Tweet
                key={id}
                id={id}
              />
            );
          })
        ) : (
          <Spinner />
        )}
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

const Error = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--warning-red);
  color: var(--dark-red);
  border: 1px solid var(--dark-red);
  border-radius: 5px;
  width: 550px;
  height: 50px;
`;

export default Feed;
