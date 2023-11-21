import { BiRepost } from "react-icons/bi";

export default function TweetActionRepost({ repostCount }) {
    return (
        <p className="tweet-action"><BiRepost /> {repostCount} </p>
    )
}

 