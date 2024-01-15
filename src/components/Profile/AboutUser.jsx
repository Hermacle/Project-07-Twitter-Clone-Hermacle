function AboutUser({name,userName,description,following,followers,tags}) {
  return (
    <>
      <h3>{name}</h3>
      <p className="small-text">{userName}</p>
      <p className="profile-bio">{description}<br /> <span className="small-text">{tags}</span></p>
      <ul className="profile-stats">
        <li><span className="stat-count">{following}</span> Following</li>
        <li><span className="stat-count">{followers}</span> Followers</li>
      </ul>
    </>
  )
}
export default AboutUser;