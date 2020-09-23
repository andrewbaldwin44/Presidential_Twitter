const initialState = {
  tweetFeed: null,
};

export default function itemsReducer(state = initialState, action) {
  const tweetStream = state.tweetFeed;
  const newTweetFeed = action.tweetFeed;

  switch (action.type) {
    case 'TWEET_FEED': {
      return {
        ...state,
        tweetFeed: {
          ...tweetStream,
          [newTweetFeed.id]: newTweetFeed,
        }
      }
    }

    default: {
      return state;
    }
  }
}
