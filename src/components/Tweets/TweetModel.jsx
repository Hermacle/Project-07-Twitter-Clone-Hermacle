import { useState } from 'react';

import "./Tweets.css"; 

// Import react-icons
import { IoIosHeartEmpty } from "react-icons/io"; 
import { IoIosHeart } from "react-icons/io"; 
import { FiMessageCircle } from "react-icons/fi";  
import { BiRepost } from "react-icons/bi";  
import { FiShare } from "react-icons/fi"; 


function TweetModel({ tweet, userData, icon }) {
  const [count, setCount] = useState(tweet.likeCount);
  const [increment, setIncrement] = useState(true);

  const handleClick = () => {
    if (increment) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    setIncrement(!increment);
  };

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img src={userData.avatar} alt="avatar" />
      </div>
      <div className="tweet-content">
        <div className="tweet-body">
          <div className="tweet-title">
            <h3 className="tweet-title-author">{userData.author}</h3>
            <span className="tweet-title-author">{icon}</span>
            <p className="tweet-title-details">{userData.userName} . {tweet.timePost}</p>
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
  );
}
export default  TweetModel;