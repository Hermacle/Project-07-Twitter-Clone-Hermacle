import("./Profile.css")
import data from "../Data/data";

import { useParams } from "react-router-dom";

import TitleProfile from "./TitleProfile";
import ImageUser from "./ImageUser";
import ProfileNavigation from "./ProfileNavigation";
import ButtonAction from "./ButtonAction";
import AboutUser from "./AboutUser";

const moreIcon = <img src="src/Icons/More-2.svg" alt="More Icon" />
const msgIcon = <img src="src/Icons/Messages.svg" alt="Message Icon" />

export default function SpecificProfile() {

  const { id } = useParams();
  const clickedUser = Object.values(data).find(user => user.profile.id === id);

  if (!clickedUser) {
    return <p>Le PROFIL que vous avez demandé n'existe pas.</p>;
  }
  
  const author = clickedUser.profile.author;
  const posts = clickedUser.tweets.length;
  const userName = clickedUser.profile.userName;
  const avatar = clickedUser.profile.avatar;
  const imageCover = clickedUser.profile.imageCover;
  const description = clickedUser.profile.description;
  const tags = clickedUser.profile.tags;
  const followers = clickedUser.profile.followers;
  const followings = clickedUser.profile.followings;

  return (
    <div>
      <TitleProfile name={author} post={posts} />
      <ImageUser imageCover={imageCover} avatar={avatar}/>
      <section className="container">
        <div className="about-user">
          <div className="button-action">
            <ButtonAction value={moreIcon} className="icon" />
            <ButtonAction value={msgIcon} className="icon" />
            <ButtonAction value="Follow" className="button-follow" />
          </div>
          <AboutUser name={author} userName={userName}  description={description} tags={tags} following={followings} followers={followers} />
        </div>
      </section>
      <ProfileNavigation />
    </div>
  );
}
