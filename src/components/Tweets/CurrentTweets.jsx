import React from 'react';
import "./Tweets.css";

import data from '../Data/data';
import TweetModel from './TweetModel';

function CurrentTweets({ icon }) {
  const twitterUserData = data.Hermacle;
  const twitterTweets = twitterUserData.tweets;

  return (
    <div>
      {twitterTweets.map((tweet) => (
        <TweetModel key={tweet.id} tweet={tweet} userData={twitterUserData.profile} icon={icon} />
      ))}
    </div>
  );
}
export default CurrentTweets;