import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Tweet = ({ id }) => {
  const options = {
    cards: "hidden",
    width: "550",
    align: "center",
    conversation: "none",
  };

  return <TwitterTweetEmbed options={options} tweetId={id} />;
};

export default Tweet;
