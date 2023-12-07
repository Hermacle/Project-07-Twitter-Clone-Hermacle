import avatarImage from './../../images/Profil-image_400x400.jpg'

export default function Avatar() {
    return (
        <div className="avatar">
            <img src={avatarImage}  alt="image" />
        </div>
    )
}