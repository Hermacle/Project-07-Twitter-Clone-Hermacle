import { FiShare } from "react-icons/fi";

export default function TweetActionShare({ shareCount }) {
    return (
        <p className="tweet-action"><FiShare /> {shareCount} </p>
    )
}
