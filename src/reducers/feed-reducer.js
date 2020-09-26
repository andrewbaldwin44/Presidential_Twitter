const initialState = {
  tweetFeed: null,
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case 'TWEET_FEED': {
      const newTweetFeed = action.tweetFeed;

      return {
        ...state,
        tweetFeed: newTweetFeed,
      }
    }

    case 'CLEAR_TWEET_FEED': {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
