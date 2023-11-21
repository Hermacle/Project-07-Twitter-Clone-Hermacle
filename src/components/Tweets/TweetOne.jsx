import TweetAvatar from "../Tweet/TweetAvatar"
import TweetTitleAuthor from "../Tweet/TweetTitleAuthor"
import TweetTitleDetails from "../Tweet/TweetTitleDetails"
import TweetText from "../Tweet/TweetText"
import TweetImage from "../Tweet/TweetImage"

import TweetActionLike from "../Tweet/TweetActionLike"
import TweetActionRepost from "../Tweet/TweetActionRepost"

function TweetOne() {
    return (
        <>
            <div>
                <TweetAvatar imageSrc={require('./../../images/profile-photo.png')} />
            </div>
            <div className="tweet-body">
                <div className="tweet-title">
                    <TweetTitleAuthor titleAuthor="Lorem Title" />
                    <TweetTitleDetails />
                </div>
                <TweetText />
                <TweetImage imageSrc={require('./../../images/tweet-image.png')} />

            </div>
            <div className="tweet-actions">
                <TweetActionLike likeCount={4} />
                <TweetActionRepost repostCount={49} />
            </div>
        </>
    )
}