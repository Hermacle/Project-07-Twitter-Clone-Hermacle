import { HiCheckBadge } from "react-icons/hi2";
import Search from "./Search";
import TrendsCard from "./TrendsCard";

function Follow() {
  return (
    <div className="follow card">
      <h4>Who to follow</h4> <br />
      <div className="follow-item display-flex">
        <div className="">
          <img src="src/images/tweet-profile-photo3.png" alt="avatar" />
        </div>
        <div className="">
          <p className="">The New York Times <HiCheckBadge className="" /></p>
          <p className="small-text">@nytimes</p>
        </div>
        <div>
          <button>Follow</button>
        </div>
      </div> <br />
      <div className="follow-item display-flex">
        <div className="">
          <img src="src/images/tweet-profile-photo3.png" alt="avatar" />
        </div>
        <div className="">
          <p className="">The New York Times <HiCheckBadge className="" /></p>
          <p className="small-text">@CNN</p>
        </div>
        <div>
          <button>Follow</button>
        </div>
      </div> <br />
      <div className="follow-item display-flex">
        <div className="">
          <img src="src/images/tweet-profile-photo3.png" alt="avatar" />
        </div>
        <div className="">
          <p className="">The New York Times <HiCheckBadge className="" /></p>
          <p className="small-text">@nytimes</p>
        </div>
        <div>
          <button>Follow</button>
        </div>
      </div> <br />
      <div className="show-more">
        <a href="#">Show more</a>
      </div>
    </div>

  )
}
function Policy() {
  return (
    <div className="policy">
      <a href="#">Terms of Service</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Cookie Policy</a> <br /> <br />
      <a href="#">Imprint</a>
      <a href="#">Ads info</a>
      <a href="#">More ...</a>
      <span> © 2021 Twiter, Inc.</span>
    </div>
  )
}
export default function Trends() {
  return (
    <div className="right-sidebar">
      <Search />
      <TrendsCard />
      <Follow />
      <Policy />
    </div>
  )
}
