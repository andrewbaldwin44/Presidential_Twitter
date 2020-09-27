export const setTwitterRules = (user) => ({
  type: "SET_TWITTER_RULES",
  user
});

export const sendTweetFeed = (tweetFeed) => ({
  type: "SEND_TWEET_FEED",
  tweetFeed
});

export const sendErrorMessage = (message) => ({
  type: 'SEND_ERROR_MESSAGE',
  message
})

export const clearTweetFeed = () => ({
  type: 'CLEAR_TWEET_FEED',
});
