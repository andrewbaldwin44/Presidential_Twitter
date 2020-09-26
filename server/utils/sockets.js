const { toArray } = require('./index');

const twitterFeed = {};
const DEFAULT_FEED_SIZE = 20;

function recordTwitterFeed({ data }) {
  twitterFeed[data.id] = {
    data,
    timestamp: new Date(),
  };
}

function byRecentFirst(a, b) {
  if (a.timestamp > b.timestamp) return 1;
  else if (b.timestamp > a.timestamp) return -1;
  else return 0;
}

function getTwitterFeed(feedSize = DEFAULT_FEED_SIZE) {
  return toArray(twitterFeed).sort(byRecentFirst).slice(0, DEFAULT_FEED_SIZE);
}

module.exports = {
  recordTwitterFeed,
  getTwitterFeed,
}
