function TitleProfile({name,post}) {
  return (
    <div className="title-profile">
      <div className="icon">
        <img src="src/Icons/arrow-back.svg" alt="icone" />
      </div>
      <div>
        <h4>{name}</h4>
        <p className="small-text">{post} posts</p>
      </div>

    </div>
  )
} export default TitleProfile;