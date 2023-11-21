export default function TweetImage({ imageSrc }){
    return (
        <img className="tweet-image" src={imageSrc} alt="image"/>
    )
}

 

// Exemple d'appel avec Props 

function Display() {
    return (
        <>
            <TweetImage imageSrc={require('./../../images/tweet-image.png')} />
        </>
    )
}