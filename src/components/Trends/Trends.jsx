import Search from "./Search";
import TrendsCard from "./TrendsCard";
import FollowCard from "./FollowCard";
import PolicyTerms from "./PolicyTerms";


export default function Trends() {
  return (
    <div className="right-sidebar">
      <Search />
      <TrendsCard />
      <FollowCard />
      <PolicyTerms />
    </div>
  )
}
