import React from 'react';
import Trends from '../components/Trends/Trends';

import Sidebar from '../components/Sidebar/Sidebar';
import Profile from '../components/Profile/Profile';
import AllTweets from '../components/Tweets/AllTweets';
import SpecificTweets from '../components/Tweets/SpecificTweets';

// React Icons 
import { HiCheckBadge } from 'react-icons/hi2';

export default function ProfilePage() {
  return (
    <>
    <Sidebar homeIcon="src/Icons/Home.svg" profileIcon="src/Icons/Profile-fill.svg" />
    <main className="timeline">
      <section >
        <Profile />
        <SpecificTweets icon={<HiCheckBadge />}/>
      </section>
    </main>
    <Trends />
    </>
  );
}
