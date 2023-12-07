//Import json file
import dataTweets from './dataTweets.json'

import ("./Tweets.css")

//Import React icons 
import { IoIosHeartEmpty } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { BiRepost } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import { HiCheckBadge } from "react-icons/hi2";

export default function Tweets() {
    return (
        <div>
            {dataTweets.map((tweet) => (
                <div key={tweet.id}>
                    <div className="tweet">
                        <div className="tweet-avatar">
                            <img src={tweet.avatar} alt="avatar" />
                        </div>

                        <div className="tweet-content">
                            <div className="tweet-body">
                                <div className="tweet-title">
                                    <h3 className="tweet-title-author">{tweet.author}</h3>
                                    <HiCheckBadge className="tweet-title-author" />
                                     

                                    <p className="tweet-title-details">{tweet.userName} . {tweet.timePost}</p>
                                </div>
                                <p className="tweet-text">{tweet.text}</p>
                                <div className="tweet-image">
                                    {tweet.image && <img src={tweet.image} alt="tweet" />}
                                </div>
                            </div>
                            <div className="tweet-actions">
                                <div className='tweet-action action-comment' title='Reply'> <p><FiMessageCircle  className='icon'/></p>{tweet.commentCount}</div>
                                <div className='tweet-action action-repost' title='Repost'><p><BiRepost className='icon' /></p>{tweet.repostCount}</div>
                                <div className='tweet-action action-like' title='Like'><p><IoIosHeartEmpty className='icon' /></p>{tweet.likeCount}</div>
                                <div className='tweet-action action-share' title='Share'><p><FiShare className='icon' /></p>{tweet.shareCount}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}




 
    
   