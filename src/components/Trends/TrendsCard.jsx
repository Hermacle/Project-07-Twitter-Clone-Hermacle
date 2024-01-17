
function Trend({ title, trend, tweets }) {
  return (
    <div className="trend display-flex">
      <div className="trend-detail">
        <p className="small-text">{title}</p>
        <p>{trend}</p>
        <p className="small-text">{tweets} Tweets</p>
      </div>
      <div>
        <img src="src/Icons/More-2.svg" alt="More Icon" />
      </div>
    </div>
  )
}

function TrendsCard() {
  return (
    <div className="trends card">
      <div className="tends-title display-flex">
        <h4>Trends for you</h4>
        <div><img src="src/Icons/Settings.svg" alt="Settings Icon" /></div>
      </div> <br />

      <Trend title="Trending in Turkey" trend="#SQUID" tweets="2,066" />
      <br />
      <Trend title="Trending in Turkey" trend="#SQUID" tweets="2,066" />
      <br />
      <Trend title="Trending in Turkey" trend="#SQUID" tweets="2,066" />
      <br />
      <Trend title="Trending in Turkey" trend="#SQUID" tweets="2,066" />
      <br />

      <div className="show-more">
        <a href="#">Show more</a>
      </div>
    </div>
  )
}
export default TrendsCard;