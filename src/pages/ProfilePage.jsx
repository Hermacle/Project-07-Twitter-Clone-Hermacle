import React from 'react';

//left sidebar
import Sidebar from '../components/Sidebar/Sidebar';

// tweet and profile components
import CurrentProfile from '../components/Profile/CurrentProfile';
import CurrentTweets from '../components/Tweets/CurrentTweets';

//the components of the right sidebar
import Search from '../components/Trends/Search';
import TrendsCard from '../components/Trends/TrendsCard';
import FollowCard from '../components/Trends/FollowCard';
import PolicyTerms from '../components/Trends/PolicyTerms';

// React Icons 
import { HiCheckBadge } from 'react-icons/hi2';

export default function ProfilePage() {
  return (
    <>
      <Sidebar homeIcon="src/Icons/Home.svg" profileIcon="src/Icons/Profile-fill.svg" />
      <main className="timeline">
        <section >
          <CurrentProfile />
          <CurrentTweets icon={<HiCheckBadge />} />
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
