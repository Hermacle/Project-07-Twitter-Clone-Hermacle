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

export default function TweetThree() {
    return (
        <div className="tweet">
            <TweetAvatar imageSrc={imageTweetAvatar} />

            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <TweetTitleAuthor titleAuthor="Twitter" /><HiCheckBadge className="tweet-title-author" />
                        <TweetTitleDetails authorName="@Twitter" timePost="Dec 10, 2022" />
                    </div>
                    <TweetText tweetText="We'll begin replacing that “official” label with a gold checkmark for businesses, and later in the week a grey checkmark for government and multilateral accounts." />
                </div>
                <div className="tweet-actions">
                    <TweetActionComment commentCount={"6.8k"} />
                    <TweetActionRepost repostCount={"36.6k"} />
                    <TweetActionLike likeCount={"267k"} />
                    <TweetActionShare shareCount={null} />
                </div>
            </div>
        </div>
    )
}