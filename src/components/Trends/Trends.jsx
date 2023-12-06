import { HiCheckBadge } from "react-icons/hi2";

function Trends() {
    return (
        <div className="right-sidebar">
            <div className="search card">
                <img src="src/Icons/Search.svg" alt="Search Icon" />
                <input type="search" name="" id="" placeholder="Search Twitter" />
            </div>
            <div className="trends card">
                <div className="tends-title">
                    <h4>Trends for you</h4>
                    <div><img src="src/Icons/Settings.svg" alt="Settings Icon" /></div>
                </div>
                <div className="trend">
                    <div className="trend-detail">
                        <p className="small-text">Trending in Turkey</p>
                        <p>#SQUID</p>
                        <p className="small-text">2,066 Tweets</p>
                    </div>
                    <div>
                        <img src="src/Icons/More-2.svg" alt="More Icon" />
                    </div>
                </div>
                <div className="trend">
                    <div className="trend-detail">
                        <p className="small-text">Trending in Turkey</p>
                        <p>#SQUID</p>
                        <p className="small-text">2,066 Tweets</p>
                    </div>
                    <div>
                        <img src="src/Icons/More-2.svg" alt="More Icon" />
                    </div>
                </div>
                <div className="trend">
                    <div className="trend-detail">
                        <p className="small-text">Trending in Turkey</p>
                        <p>#SQUID</p>
                        <p className="small-text">2,066 Tweets</p>
                    </div>
                    <div>
                        <img src="src/Icons/More-2.svg" alt="More Icon" />
                    </div>
                </div>
                <div className="trend">
                    <div className="trend-detail">
                        <p className="small-text">Trending in Turkey</p>
                        <p>#SQUID</p>
                        <p className="small-text">2,066 Tweets</p>
                    </div>
                    <div>
                        <img src="src/Icons/More-2.svg" alt="More Icon" />
                    </div>
                </div>
                 
                <div className="show-more">
                    <a href="#">Show more</a>
                </div>
            </div>
            <div className="follow card">
                <h4>Who to follow</h4>
                <div className="follow-item">
                    <div className="">
                        <img src="src/images/tweet-profile-photo3.png" alt="avatar" />
                    </div>
                    <div className="">
                        <p className="">The New York Times</p>
                        <HiCheckBadge className="" />
                        <p className="small-text">@nytimes</p>
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </div>
                <div className="follow-item">
                    <div className="">
                        <img src="src/images/tweet-profile-photo3.png" alt="avatar" />
                    </div>
                    <div className="">
                        <p className="">The New York Times</p>
                        <HiCheckBadge className="" />
                        <p className="small-text">@nytimes</p>
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </div>
                <div className="follow-item">
                    <div className="">
                        <img src="src/images/tweet-profile-photo3.png" alt="avatar" />
                    </div>
                    <div className="">
                        <p className="">The New York Times</p>
                        <HiCheckBadge className="" />
                        <p className="small-text">@nytimes</p>
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </div>
                <div className="show-more">
                    <a href="#">Show more</a>
                </div>
            </div>
            <div className="policy">
                <a href="">Terms of Service</a> <br />
                <a href="">Privacy Policy</a> <br />
                <a href="">Cookie Policy</a> <br />
                <a href="">Imprint</a> <br />
                <a href="">Ads info</a> <br />
                <a href="">More ...</a> <br />
                <span> © 2021 Twiter, Inc.</span>
            </div>
        </div>
    )
}
export default Trends;