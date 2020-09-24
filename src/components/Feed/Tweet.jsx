import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Tweet = ({ id }) => {
  const options = {
    cards: "hidden",
    align: "center",
    width: "650",
    conversation: "none",
  };

  return <TwitterTweetEmbed options={options} tweetId={id} />;
};

export default Tweet;
