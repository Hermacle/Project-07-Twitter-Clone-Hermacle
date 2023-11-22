import TweetAvatar from "../Tweet/TweetAvatar"
import TweetTitleAuthor from "../Tweet/TweetTitleAuthor"
import TweetTitleDetails from "../Tweet/TweetTitleDetails"
import TweetText from "../Tweet/TweetText"
import TweetImage from "../Tweet/TweetImage"

// Import Tweet Actions
import TweetActionLike from "../Tweet/TweetActionLike"
import TweetActionRepost from "../Tweet/TweetActionRepost"
import TweetActionShare from "../Tweet/TweetActionShare"
import TweetActionComment from "../Tweet/TweetActionComment"

// Tweet Image Avatar
import imageTweetAvatar from './../../images/tweet-profile-photo3.png';

// Import React-icons 
import { HiCheckBadge } from "react-icons/hi2";

export default function TweetTwo() {
    return (
        <div className="tweet">
            <TweetAvatar imageSrc={imageTweetAvatar} />

            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <TweetTitleAuthor titleAuthor="The New York Times" /><HiCheckBadge className="tweet-title-author" />
                        <TweetTitleDetails authorName="@nytimes" timePost="2h" />
                    </div>
                    <TweetText tweetText="Gardening boomed during the pandemic. Six black writers share how has helped them re-establish, and reimagine, a connection to cultivation and land." />
                    <TweetImage />
                </div>
                <div className="tweet-actions">
                    <TweetActionComment commentCount={19} />
                    <TweetActionRepost repostCount={48} />
                    <TweetActionLike likeCount={422} />
                    <TweetActionShare shareCount={19} />
                </div>
            </div>
        </div>
    )
}