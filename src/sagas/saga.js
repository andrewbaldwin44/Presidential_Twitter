import { takeEvery, call, put } from 'redux-saga/effects';
import { changeTwitterRules } from '../utils/twitter';

function* handleTwitterRules({ user }) {
  yield put({ type: 'CLEAR_TWEET_FEED' })
  yield call(changeTwitterRules, user);
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
