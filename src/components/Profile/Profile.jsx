import("./Profile.css")
import TitleProfile from "./TitleProfile";
import ImageUser from "./ImageUser";
import ProfileNavigation from "./ProfileNavigation";
import ButtonAction from "./ButtonAction";
import AboutUser from "./AboutUser";
 
const moreIcon = <img src="src/Icons/More-2.svg" alt="More Icon" />
const msgIcon = <img src="src/Icons/Messages.svg" alt="Message Icon" />

export default function Profile() {
  return (
    <div>
      <TitleProfile />
      <ImageUser />
      <section className="container">
        <div className="about-user">
          <div className="button-action">
            <ButtonAction value={moreIcon} className="icon" />
            <ButtonAction value={msgIcon} className="icon" />
            <ButtonAction value="Follow" className="button-follow" />
            <ButtonAction value="Edit profile" className="button-edit" />
          </div>
          <AboutUser />
        </div>
      </section>
      <ProfileNavigation />
    </div>
  );
}
