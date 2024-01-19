
import React from 'react';
import "./Tweets.css";

 
import TweetModel from './TweetModel';

function SpecificTweets({ tweets,userData, icon }) {
   
  return (
    <div>
      {tweets.map((tweet) => (
        <TweetModel key={tweet.id} tweet={tweet} icon={icon} userData={userData} />
      ))}
    </div>
  );
}
export default SpecificTweets;
 

  
