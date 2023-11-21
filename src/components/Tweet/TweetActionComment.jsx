
import { FiMessageCircle } from "react-icons/fi";

export default function TweetActionComment({ commentCount }) {
    return (
        <p className="tweet-action"><FiMessageCircle /> {commentCount} </p>
    )
}

 
