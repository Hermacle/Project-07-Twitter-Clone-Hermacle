import { NavLink } from "react-router-dom";
import { appRoutes } from "../../Routes/routes";

function Sidebar({homeIcon, profileIcon}) {
    return (
        <div className="sidebar">
            <div>
                <div className="logo" >
                    <img src="src/Icons/Twitter.svg" alt="icone" />
                </div>

                <div>
                    <ul>
                        <li><NavLink to={appRoutes.home} className="navigation"><img src={homeIcon} alt="" />Home</NavLink> </li>
                        <li><NavLink to="/explore" className="navigation"><img src="src/Icons/Explore.svg" alt="" /> Explore</NavLink> </li>
                        <li><NavLink to="/notifications" className="navigation"><img src="src/Icons/Notifications.svg" alt="" /> Notifications</NavLink></li>
                        <li><NavLink to="/messages" className="navigation"><img src="src/Icons/Messages.svg" alt="" /> Messages</NavLink> </li>
                        <li><NavLink to="/bookmarks" className="navigation"><img src="src/Icons/Bookmarks.svg" alt="" /> Bookmarks</NavLink></li>
                        <li><NavLink to="list" className="navigation"><img src="src/Icons/Lists.svg" alt="" /> List</NavLink></li>
                        <li><NavLink to={appRoutes.profile} className="navigation"><img src={profileIcon} alt="" /> Profile</NavLink></li>
                        <li><NavLink to="/more" className="navigation"><img src="src/Icons/More.svg" alt="" /> More</NavLink></li>
                    </ul>
                </div>
                <button className="button post-button">Tweet</button>
            </div>
            
            <div className="user-profil">
                <img src="src/images/Profil-image_400x400.jpg" className="user-avatar" alt="icone" />
                <div className="user-detail">
                    <h4>Hermacle <img src="src/Icons/Private.svg" alt="icone" /></h4>
                    <p className="small-text">@Hermacle_kih</p>
                </div>
                <img src="src/Icons/More-2.svg" className="more-2" alt="icone" />
            </div>

        </div>
    )

}
export default Sidebar;