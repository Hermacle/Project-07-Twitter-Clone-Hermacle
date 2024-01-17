import Search from "./Search";
import TrendsCard from "./TrendsCard";
import FollowCard from "./FollowCard";

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
      <FollowCard />
      <Policy />
    </div>
  )
}
