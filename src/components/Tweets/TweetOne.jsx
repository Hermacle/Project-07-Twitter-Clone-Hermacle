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
import imageTweetAvatar from './../../images/tweet-profile-photo.png';

// Import React-icons 
import { HiCheckBadge } from "react-icons/hi2";

export default function TweetOne() {
    return (
        <div className="tweet">
            <TweetAvatar imageSrc={imageTweetAvatar} />

            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <TweetTitleAuthor titleAuthor="CNN" /><HiCheckBadge className="tweet-title-author" />
                        <TweetTitleDetails authorName="@CNN" timePost="7m" />
                    </div>
                    <TweetText tweetText="President Joe Biden touted a new agreement reached with the Europen Union to ease trump-era tariffs on aluminum and stell as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis." />
                </div>
                <div className="tweet-actions">
                    <TweetActionComment commentCount={57} />
                    <TweetActionRepost repostCount={144} />
                    <TweetActionLike likeCount={184} />
                    <TweetActionShare shareCount={2} />
                </div>
            </div>
        </div>
    )
}