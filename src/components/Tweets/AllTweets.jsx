import React from 'react';
import "./Tweets.css";   
import data from '../Data/data';
import TweetModel from './TweetModel';
 
function AllTweets({ newProfile, icon }) {
  // Parcourir l'objet de données pour obtenir les tweets de tous les utilisateurs
  const allTweets = Object.keys(data).map((user) => {

    const userData = data[user];

    // Parcourir les tweets de chaque utilisateur et créer un composant TweetModel pour chaque tweet
    return userData.tweets.map((tweet) => (
      <TweetModel key={tweet.id} tweet={tweet} userData={userData.profile} icon={icon} />
    ));
  });

  return (
    <div>
      {allTweets}
    </div>
  );
} 
export default AllTweets; 
