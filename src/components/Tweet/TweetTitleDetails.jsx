export default function TweetTitleDetails ({authorName, timePost}){
    return (
        <p className="tweet-title-details">{authorName} . {timePost}</p>
    )
}