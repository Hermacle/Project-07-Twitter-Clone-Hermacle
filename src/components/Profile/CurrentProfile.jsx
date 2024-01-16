import("./Profile.css")
import data from "../Data/data";

import TitleProfile from "./TitleProfile";
import ImageUser from "./ImageUser";
import ProfileNavigation from "./ProfileNavigation";
import ButtonAction from "./ButtonAction";
import AboutUser from "./AboutUser";

const moreIcon = <img src="src/Icons/More-2.svg" alt="More Icon" />
const msgIcon = <img src="src/Icons/Messages.svg" alt="Message Icon" />

export default function CurrentProfile() {

  // Option 7: Afficher l'utilisateur "Twitter" et ses infos de profile.
  const author = data.Hermacle.profile.author;
  const posts = data.Hermacle.tweets.length;
  const userName = data.Hermacle.profile.userName;
  const avatar = data.Hermacle.profile.avatar;
  const imageCover = data.Hermacle.profile.imageCover;
  const description = data.Hermacle.profile.description;
  const tags = data.Hermacle.profile.tags;
  const followers = data.Hermacle.profile.followers;
  const followings = data.Hermacle.profile.followings;

  return (
    <div>
      <TitleProfile name={author} post={posts} />
      <ImageUser imageCover={imageCover} avatar={avatar}/>
      <section className="container">
        <div className="about-user">
          <div className="button-action">
            <ButtonAction value="Edit profile" className="button-edit" />
          </div>
          <AboutUser name={author} userName={userName}  description={description} tags={tags} following={followings} followers={followers} />
        </div>
      </section>
      <ProfileNavigation />
    </div>
  );
}



 