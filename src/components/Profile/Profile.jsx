import("./Profile.css")
import TitleProfile from "./TitleProfile";
import ImageUser from "./ImageUser";
import ProfileNavigation from "./ProfileNavigation";
import ButtonAction from "./ButtonAction";
import AboutUser from "./AboutUser";

export default function Profile() {
  return (
    <div>
      <TitleProfile />
      <ImageUser />
      <section className="container">
        <div className="about-user">
          <div className="button-action">
            <ButtonAction value="..." className="icon" />
            <ButtonAction value="Ms" className="icon" />
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
