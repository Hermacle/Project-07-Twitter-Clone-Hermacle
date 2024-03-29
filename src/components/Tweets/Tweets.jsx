
import { useState } from 'react'; 
import "./Tweets.css";  

// Importation des data
import data from '../Data/data'; 

// Import react-icons
import { IoIosHeartEmpty } from "react-icons/io"; 
import { IoIosHeart } from "react-icons/io"; 
import { FiMessageCircle } from "react-icons/fi";  
import { BiRepost } from "react-icons/bi";  
import { FiShare } from "react-icons/fi"; 

// Composant principal Tweets 
export default function Tweets({ icon }) {
  return (
    <div>
      {/* Parcours de chaque User(utilisateur Tweeter) */}
      {Object.keys(data).map((user) => {
        const userData = data[user];  

				// Parcours de chaque tweet des users
        return userData.tweets.map((tweet) => { 
          const tweetData = userData.profile; 

          const [count, setCount] = useState(tweet.likeCount);  
          const [increment, setIncrement] = useState(true);  

          //  Gestion Clic sur du bouton "Like"
          const handleClick = () => {
            if (increment) {
              setCount(count + 1);  
            } else {
              setCount(count - 1);  
            }
            setIncrement(!increment); // Inversion de l'état d'incrémentation
          };

          return (
            <div key={tweet.id}>
              <div className="tweet">
                <div className="tweet-avatar">
                  <img src={tweetData.avatar} alt="avatar" /> 
                </div>

                <div className="tweet-content">
                  <div className="tweet-body">
                    <div className="tweet-title">
                      <h3 className="tweet-title-author">{tweetData.author}</h3>  
                      <span className="tweet-title-author">{icon}</span>  
                      <p className="tweet-title-details">{tweetData.userName} . {tweet.timePost}</p>  
                    </div>
                    <p className="tweet-text">{tweet.text}</p> 
                    <div className="tweet-image">
                      {tweet.imagePost && <img src={tweet.imagePost} alt="tweet" />} 
                    </div>
                  </div>

                  <div className="tweet-actions">
                    <div className='tweet-action action-comment' title='Reply'>
                      <p><FiMessageCircle className='icon' /></p>{tweet.commentCount}
                    </div>
                    <div className='tweet-action action-repost' title='Repost'>
                      <p><BiRepost className='icon' /></p>{tweet.repostCount}
                    </div>

                    <div className='tweet-action action-like' title='Like' onClick={handleClick}>
                      <p>{increment ? <IoIosHeartEmpty className='icon' /> : <IoIosHeart className='icon-heart-fill' />}</p>{count}
                    </div>
                    
                    <div className='tweet-action action-share' title='Share'>
                      <p><FiShare className='icon' /></p>{tweet.shareCount}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        });
      })}
    </div>
  );
}
