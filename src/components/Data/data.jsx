const data = {
  CNN: {
    // Données pour l'utilisateur CNN
    profile: {
      id: "CNN_ID",
      author:"CNN",
      userName: "@CNN",
      avatar: "src/images/tweet-profile-photo.png",
      imageCover: "url_de_l_image",
      description: "Description de l'utilisateur CNN",
      tags: "#Tag #utilisateur #profil",
      followers : 12,
      followings : 4
    },
    tweets: [
      {
        id: "Tweet1_ID",
        text: "President Joe Biden touted a new agreement reached with the Europen Union to ease trump-era tariffs on aluminum and stell as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis.",
        imagePost :"",
        timePost: "7m",
        commentCount: 57,
        likeCount: 184,
        commentCount: 57,
        repostCount: 144,
        shareCount: 2
      }  
    ]
  },
  TheNewYorkTimes: {
    // Données pour l'utilisateur The New York Times
    profile: {
      id: "NYK_ID",
      author:"The New York Times",
      userName: "@nytimes",
      avatar: "src/images/tweet-profile-photo3.png",
      imageCover: "url_de_l_image",
      description: "Description de l'utilisateur The New York Times",
      tags: "#Tag #utilisateur #profil",
      followers : 12,
      followings : 4
    },
    tweets: [
      {
        id: "Tweet1_ID",
        text: "Gardening boomed during the pandemic. Six black writers share how has helped them re-establish, and reimagine, a connection to cultivation and land.",
        imagePost :"src/images/tweet-image.png",
        timePost: "2h",
        commentCount: 19,
        likeCount: 422,
        commentCount: 422,
        repostCount: 48,
        shareCount: 19
      }  
    ]
  },
  Twitter: {
    // Données pour l'utilisateur Twitter
    profile: {
      id: "NYK_ID",
      author:"Twitter",
      userName: "@Twitter",
      avatar: "src/images/tweet-profile-photo2.png",
      imageCover: "url_de_l_image",
      description: "Description de l'utilisateur Twitter",
      tags: "#Tag #utilisateur #profil",
      followers : 12,
      followings : 4
    },
    tweets: [
      {
        id: "Tweet1_ID",
        text: "We'll begin replacing that “official” label with a gold checkmark for businesses, and later in the week a grey checkmark for government and multilateral accounts.",
        imagePost :"",
        timePost: "Dec 10, 2022",
        commentCount: "6.8K",
        likeCount: 267,
        commentCount: 422,
        repostCount: "36.6K",
        shareCount: 12        
      },
      {
        id: "Tweet1_ID",
        text: "Your timeline is like a book you'll never finish.",
        imagePost :"",
        timePost: "Oct, 4",
        commentCount: "118.7K",
        likeCount: 400,
        commentCount: 422,
        repostCount: 785,
        shareCount: 12     
      }  
    ]
  }

};
export default data;

