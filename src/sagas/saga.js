import { takeEvery, call, put } from 'redux-saga/effects';

import { changeTwitterRules } from '../utils/twitter';
import { requestFeed } from '../hooks/useSockets';

function* handleTwitterRules({ user }) {
  yield put({ type: 'CLEAR_TWEET_FEED' });
  yield call(changeTwitterRules, user);
  yield requestFeed();
}

function* handleTweetFeed({ tweetFeed }) {
  yield put({
    type: 'TWEET_FEED',
    tweetFeed
  });
}

export function* watchTwitterFeed() {
  yield takeEvery('SET_TWITTER_RULES', handleTwitterRules);
  yield takeEvery('SEND_TWEET_FEED', handleTweetFeed);
}
