import { IoIosHeartEmpty } from "react-icons/io";

export default function TweetActionLike({ likeCount }) {
    return (
        <p className="tweet-action"><IoIosHeartEmpty /> {likeCount} </p>
    )
}

 