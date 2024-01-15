import("./Profile.css")
import data from "../Data/data";

import TitleProfile from "./TitleProfile";
import ImageUser from "./ImageUser";
import ProfileNavigation from "./ProfileNavigation";
import ButtonAction from "./ButtonAction";
import AboutUser from "./AboutUser";

const moreIcon = <img src="src/Icons/More-2.svg" alt="More Icon" />
const msgIcon = <img src="src/Icons/Messages.svg" alt="Message Icon" />

export default function SpecificProfile() {

  // Option 7: Afficher un utilisateur "Specifique" et ses infos de profile.
  const author = data.Twitter.profile.author;
  const posts = data.Twitter.tweets.length;
  const userName = data.Twitter.profile.userName;
  const avatar = data.Twitter.profile.avatar;
  const imageCover = data.Twitter.profile.imageCover;
  const description = data.Twitter.profile.description;
  const tags = data.Twitter.profile.tags;
  const followers = data.Twitter.profile.followers;
  const followings = data.Twitter.profile.followings;

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



 