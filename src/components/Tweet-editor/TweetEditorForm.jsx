import { HiOutlinePhoto } from "react-icons/hi2";
import { BsFiletypeGif } from "react-icons/bs";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { LuFolderClock } from "react-icons/lu";

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
                <HiOutlinePhoto />
                <BsFiletypeGif />
                <BiPoll />
                <BsEmojiSmile />
                <LuFolderClock />

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