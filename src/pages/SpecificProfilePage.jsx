import React from 'react';
import Trends from '../components/Trends/Trends';

import Sidebar from '../components/Sidebar/Sidebar'; 
import SpecificProfile from '../components/Profile/SpecificProfile';
import SpecificTweets from '../components/Tweets/SpecificTweets';

// React Icons 
import { HiCheckBadge } from 'react-icons/hi2';

export default function SpecificProfilePage() {
  return (
    <>
    <Sidebar homeIcon="src/Icons/Home.svg" profileIcon="src/Icons/Profile.svg" />
    <main className="timeline">
      <section >
        <SpecificProfile />
        <SpecificTweets icon={<HiCheckBadge />}/>
      </section>
    </main>
    <Trends />
    </>
  );
}
