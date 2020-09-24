export const setTwitterRules = (user) => ({
  type: "SET_TWITTER_RULES",
  user
})

export const sendTweetFeed = (tweetFeed) => ({
  type: "SEND_TWEET_FEED",
  tweetFeed
});
