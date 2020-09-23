import { takeEvery, put } from 'redux-saga/effects';

function* handleTwitterFeed({ tweetFeed }) {
  yield put({ type: 'TWEET_FEED', tweetFeed });
}

export function* watchTwitterFeed() {
  yield takeEvery('SEND_TWEET_FEED', handleTwitterFeed)
}
