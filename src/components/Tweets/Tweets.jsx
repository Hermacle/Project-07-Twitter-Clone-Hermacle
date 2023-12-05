//Import json file
import dataTweets from './dataTweets.json'

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
                                <div className='tweet-action'><FiMessageCircle /> {tweet.commentCount}</div>
                                <div className='tweet-action'><BiRepost /> {tweet.repostCount}</div>
                                <div className='tweet-action'><FiShare /> {tweet.shareCount}</div>
                                <div className='tweet-action'><IoIosHeartEmpty /> {tweet.likeCount}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}