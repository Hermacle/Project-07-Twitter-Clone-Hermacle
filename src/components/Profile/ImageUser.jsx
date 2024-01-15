function ImageUser({imageCover,avatar}) {
  return (
    <div className="image-user">
      <img src={imageCover} alt="Cover Photo" className="cover-photo" />
      <div>
        <img src={avatar} alt="Profile Picture" className="profile-picture" />
      </div>
    </div>
  )
}
export default ImageUser;