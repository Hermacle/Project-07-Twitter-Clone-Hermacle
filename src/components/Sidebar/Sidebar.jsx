

function Sidebar() {
    return (
        <div className="sidebar">
            <div>
                <div className="logo" >
                    <img src="src/Icons/Twitter.svg" alt="icone" />
                </div>

                <div>
                    <ul>
                        <li><img src="src/Icons/Home-Fill.svg" alt="" />Home</li>
                        <li><img src="src/Icons/Explore.svg" alt="" /> Explore</li>
                        <li><img src="src/Icons/Notifications.svg" alt="" /> Notifications</li>
                        <li><img src="src/Icons/Messages.svg" alt="" /> Messages</li>
                        <li><img src="src/Icons/Bookmarks.svg" alt="" /> Bookmarks</li>
                        <li><img src="src/Icons/Lists.svg" alt="" /> List</li>
                        <li><img src="src/Icons/Profile.svg" alt="" /> Profile</li>
                        <li><img src="src/Icons/More.svg" alt="" /> More</li>
                    </ul>
                </div>
                <button className="button post-button">Tweet</button>
            </div>
            
            <div className="user-profil">
                <img src="src/images/profile-photo.png" className="user-avatar" alt="icone" />
                <div className="user-detail">
                    <h4>Hermacle <img src="src/Icons/Private.svg" alt="icone" /></h4>
                    <p className="user-name">@Username</p>
                </div>
                <img src="src/Icons/More-2.svg" className="more-2" alt="icone" />
            </div>

        </div>
    )

}
export default Sidebar;