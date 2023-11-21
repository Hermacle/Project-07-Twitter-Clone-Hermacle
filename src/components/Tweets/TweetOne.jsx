import TweetAvatar from "../Tweet/TweetAvatar"
import TweetTitleAuthor from "../Tweet/TweetTitleAuthor"
import TweetTitleDetails from "../Tweet/TweetTitleDetails"
import TweetText from "../Tweet/TweetText"
import TweetImage from "../Tweet/TweetImage"

import TweetActionLike from "../Tweet/TweetActionLike"
import TweetActionRepost from "../Tweet/TweetActionRepost"
import TweetActionShare from "../Tweet/TweetActionShare"
import TweetActionComment from "../Tweet/TweetActionComment"

export default function TweetOne() {
    return (
        <div className="tweet">
            <div>
                <TweetAvatar />
            </div>
            <div className="tweet-body">
                <div className="tweet-title">
                    <TweetTitleAuthor titleAuthor="Lorem Title" />
                    <TweetTitleDetails />
                </div>
                <TweetText />
                <TweetImage />

            </div>
            <div className="tweet-actions">
                <TweetActionLike likeCount={4} />
                <TweetActionRepost repostCount={49} />
                <TweetActionShare shareCount={15} />
                <TweetActionComment commentCount={42} />
            </div>
        </div>
    )
}