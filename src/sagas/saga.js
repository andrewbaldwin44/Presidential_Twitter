import { takeEvery, put, delay } from 'redux-saga/effects';

function* twitterFeed() {
  yield delay(4000);
  yield put({ type: 'TWITTER_FEED_RECEIVE' });
}

export function* watchTwitterFeed() {
  yield takeEvery('TWITTER_FEED', twitterFeed)
}
