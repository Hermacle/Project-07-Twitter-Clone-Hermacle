import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 
import smileIcon from './../../Icons/Emoji.svg';
import gifIcon from './../../Icons/Gif.svg';
import mediaIcon from './../../Icons/Media.svg';
import pollIcon from './../../Icons/Poll.svg';
import scheduleIcon from './../../Icons/Schedule.svg';
import data from '../Data/data';

function TweetEditorInput({ newTweetText, setNewTweetText }) {
  return (
    <input className="tweet-editor-input" placeholder="What's happening?" value={newTweetText}
      onChange={(e) => setNewTweetText(e.target.value)} />
  );
}

function TweetEditorButtons({ handleTweetButtonClick }) {
  const buttonValue = 'Tweet';
  return (
    <div className="tweet-editor-buttons">
      <div className="tweet-editor-actions">
        <img src={mediaIcon} alt="Media Icon" />
        <img src={gifIcon} alt="GIF Icon" />
        <img src={pollIcon} alt="Poll Icon" />
        <img src={smileIcon} alt="Smile Icon" />
        <img src={scheduleIcon} alt="Schedule Icon" />
      </div>
      <Link></Link>
      <button className="button" onClick={handleTweetButtonClick}>
        {buttonValue}
      </button>
    </div>
  );
}

export default function TweetEditorForm({ updateTweets }) {
  const [newTweetText, setNewTweetText] = useState('');

  const handleTweetButtonClick = () => {
    const newTweet = {
      id: "Tweet2_ID",
      text: newTweetText,
      imagePost: "",
      timePost: "now",
      commentCount: 0,
      likeCount: 0,
      repostCount: 0,
      shareCount: 0
    };

    if (newTweetText.trim() !== '') {
      data.Hermacle.tweets.unshift(newTweet);
      updateTweets(newTweet);
      setNewTweetText('');
    }

    };
  
  return (
    <div className="tweet-editor-form">
      <TweetEditorInput newTweetText={newTweetText} setNewTweetText={setNewTweetText} />
      <TweetEditorButtons handleTweetButtonClick={handleTweetButtonClick} />
    </div>
  );
} 
