const initialState = {
  tweetFeed: null,
  errorMessage: null,
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

    case 'ERROR_MESSAGE': {
      const newErrorMessage = action.message;

      return {
        ...state,
        errorMessage: newErrorMessage,
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
