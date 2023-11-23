import avatarImage from './../../images/profile-photo.png'

export default function Avatar() {
    return (
        <div className="avatar">
            <img src={avatarImage}  alt="image" />
        </div>
    )
}