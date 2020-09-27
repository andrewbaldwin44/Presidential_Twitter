const { toArray } = require('./index');

const twitterFeed = {};
const DEFAULT_FEED_SIZE = require('../constants');

function recordTwitterFeed({ data }) {
  twitterFeed[data.id] = {
    data,
    timestamp: new Date(),
  };
}

function byRecentFirst(a, b) {
  return b.timestamp - a.timestamp;
}

function getTwitterFeed(feedSize = DEFAULT_FEED_SIZE) {
  return toArray(twitterFeed).sort(byRecentFirst).slice(0, DEFAULT_FEED_SIZE);
}

module.exports = {
  recordTwitterFeed,
  getTwitterFeed,
}
