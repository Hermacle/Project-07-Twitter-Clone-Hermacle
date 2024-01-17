import { HiCheckBadge } from "react-icons/hi2";

function Follow({avatarUrl,author,userName}){
  return(
    <div className="follow-item display-flex">
    <div>
      <img src={avatarUrl} alt="avatar" />
    </div>
    <div className="">
      <p className="">{author}<HiCheckBadge className="" /></p>
      <p className="small-text">{userName}</p>
    </div>
    <div>
      <button>Follow</button>
    </div>
  </div>
  )
}

function FollowCard() {
  return (
    <div className="follow card">
      <h4>Who to follow</h4> <br />
        <Follow avatarUrl="src/images/tweet-profile-photo3.png" author="The New York Times" userName="@nytimes"/>
        <br />
        <Follow avatarUrl="src/images/tweet-profile-photo3.png" author="The New York Times" userName="@nytimes"/>
        <br />
        <Follow avatarUrl="src/images/tweet-profile-photo3.png" author="The New York Times" userName="@nytimes"/>
        <br />
        
      <div className="show-more">
        <a href="#">Show more</a>
      </div>
    </div>
  )
}
export default FollowCard;