import React from 'react';
import "./Tweets.css";   
 
import data from '../Data/data';
import TweetModel from './TweetModel';
 
function AllTweets({ icon }) {
  return (
    <div>
      {Object.keys(data).map((user) => {
        const userData = data[user];
        return userData.tweets.map((tweet) => (
          <TweetModel key={tweet.id} tweet={tweet} userData={userData.profile} icon={icon} />
        ));
      })}
    </div>
  );
} 
export default AllTweets;
