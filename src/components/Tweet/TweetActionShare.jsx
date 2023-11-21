import { FiShare } from "react-icons/fi";

export default function TweetActionShare({ sharetCount }) {
    return (
        <p className="tweet-action"><FiShare /> {sharetCount} </p>
    )
}

// Model d'appel 
function Display() {
    return (
        <>
            <TweetActionShare sharetCount={15} />
        </>
    )
}
