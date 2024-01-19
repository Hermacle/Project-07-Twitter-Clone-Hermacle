import("./Profile.css")

import TitleProfile from "./TitleProfile";
import ImageUser from "./ImageUser";
import ProfileNavigation from "./ProfileNavigation";
import ButtonAction from "./ButtonAction";
import AboutUser from "./AboutUser";

const moreIcon = <img src="src/Icons/More-2.svg" alt="More Icon" />
const msgIcon = <img src="src/Icons/Messages.svg" alt="Message Icon" />

export default function SpecificProfile({author,posts,userName,avatar,imageCover,description,tags,followers,followings}) {

  

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
