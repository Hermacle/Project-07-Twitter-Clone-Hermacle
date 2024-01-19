import React from 'react';
import { useParams } from "react-router-dom";
import data from '../components/Data/data';

//left sidebar
import Sidebar from '../components/Sidebar/Sidebar';

// tweet and profile components
import SpecificProfile from '../components/Profile/SpecificProfile';
import SpecificTweets from '../components/Tweets/SpecificTweets';

//the components of the right sidebar
import Search from '../components/Trends/Search';
import TrendsCard from '../components/Trends/TrendsCard';
import FollowCard from '../components/Trends/FollowCard';
import PolicyTerms from '../components/Trends/PolicyTerms';


// React Icons 
import { HiCheckBadge } from 'react-icons/hi2';

export default function SpecificProfilePage() {


  const { id } = useParams();
  const clickedUser = Object.values(data).find(user => user.profile.author === id);

  if (!clickedUser) {
    return <p>Le PROFIL que vous avez demandé n'existe pas.</p>;
  }

  return (
    <>
      <Sidebar homeIcon="src/Icons/Home.svg" profileIcon="src/Icons/Profile.svg" />
      <main className="timeline">
        <section >
          <SpecificProfile
            author={clickedUser.profile.author}
            posts={clickedUser.tweets.length}
            userName={clickedUser.profile.userName}
            avatar={clickedUser.profile.avatar}
            imageCover={clickedUser.profile.imageCover}
            description={clickedUser.profile.description}
            tags={clickedUser.profile.tags}
            followers={clickedUser.profile.followers}
            followings={clickedUser.profile.followings}
          />
         <SpecificTweets tweets={clickedUser.tweets} userData={clickedUser.profile} icon={<HiCheckBadge />} />

        </section>
      </main>
      <div className="right-sidebar">
        <Search />
        <TrendsCard />
        <FollowCard />
        <PolicyTerms />
      </div>
    </>
  );
}
