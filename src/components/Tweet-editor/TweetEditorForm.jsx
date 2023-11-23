 import smileIcon from './../../Icons/Emoji.svg';
import gifIcon from './../../Icons/Gif.svg';
import mediaIcon from './../../Icons/Media.svg';
import pollIcon from './../../Icons/Poll.svg';
import scheduleIcon from './../../Icons/Schedule.svg';

function TweetEditorInput() {
    return (
        <input className="tweet-editor-input" placeholder="What's happening?"></input>
    )
}
function TweetEditorButtons() {
    const buttonValue = 'Tweet';
    return (
        <div className="tweet-editor-buttons">
            <div className="tweet-editor-actions"> 
                <img src={mediaIcon} />
                <img src={gifIcon} />
                <img src={pollIcon} />
                <img src={smileIcon} />
                <img src={scheduleIcon} />
            </div>
            <button className="button">{buttonValue}</button>
        </div>
    )
}

export default function TweetEditorForm() {
    return (
        <div className="tweet-editor-form">
            <TweetEditorInput />
            <TweetEditorButtons />
        </div>
    )
}