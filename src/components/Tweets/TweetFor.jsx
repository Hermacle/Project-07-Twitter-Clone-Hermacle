import TweetAvatar from "../Tweet/TweetAvatar"
import TweetTitleAuthor from "../Tweet/TweetTitleAuthor"
import TweetTitleDetails from "../Tweet/TweetTitleDetails"
import TweetText from "../Tweet/TweetText"

// Import Tweet Actions
import TweetActionLike from "../Tweet/TweetActionLike"
import TweetActionRepost from "../Tweet/TweetActionRepost"
import TweetActionShare from "../Tweet/TweetActionShare"
import TweetActionComment from "../Tweet/TweetActionComment"

// Tweet Image Avatar
import imageTweetAvatar from './../../images/tweet-profile-photo2.png';

// Import React-icons 
import { HiCheckBadge } from "react-icons/hi2";

export default function TweetFor() {
    return (
        <div className="tweet">
            <TweetAvatar imageSrc={imageTweetAvatar} />

            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <TweetTitleAuthor titleAuthor="Twitter" /><HiCheckBadge className="tweet-title-author" />
                        <TweetTitleDetails authorName="@Twitter" timePost="Oct, 4" />
                    </div>
                    <TweetText tweetText="Your timeline is like a book you'll never finish." />
                </div>
                <div className="tweet-actions">
                    <TweetActionComment commentCount={"118.7k"} />
                    <TweetActionRepost repostCount={"785.4k"} />
                    <TweetActionLike likeCount={"3.3M"} />
                    <TweetActionShare shareCount={null} />
                </div>
            </div>
        </div>
    )
}