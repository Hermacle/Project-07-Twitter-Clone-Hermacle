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
import imageTweetAvatar from './../../images/tweet-profile-photo.png'; 

// Import React-icons 
import { HiCheckBadge } from "react-icons/hi2";

export default function TweetOne() {
    return (
        <div className="tweet">
            <TweetAvatar imageSrc={imageTweetAvatar}/>

            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <TweetTitleAuthor titleAuthor="My title"/><HiCheckBadge className="tweet-title-author"/>
                        <TweetTitleDetails authorName = "@Twitwer" timePost ="12 Oct"/>
                    </div>
                    <TweetText tweetText="C'est en 2019 que Fisker annonce pour la toute première fois son premier modèle de voiture électrique, qui prend la forme d'un SUV baptisé Ocean. Il faudra ensuite patienter jusqu'au salon de Los Angeles en 2021 pour voir la version définitive, dont les pré-commandes ont ouvert en 2022. Mais son lancement a connu pas mal d'embûches." />
                    <TweetImage />
                </div>
                <div className="tweet-actions">
                    <TweetActionLike likeCount={4} />
                    <TweetActionRepost repostCount={49} />
                    <TweetActionShare shareCount={15} />
                    <TweetActionComment commentCount={42} />
                </div>
            </div>
        </div>
    )
}