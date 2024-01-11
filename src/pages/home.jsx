import React from 'react';
import Header from '../components/Header/Header';
import Avatar from '../components/Tweet-editor/Avatar';
import TweetEditorForm from '../components/Tweet-editor/TweetEditorForm';
import Trends from '../components/Trends/Trends';

import Sidebar from '../components/Sidebar/Sidebar';
import AllTweets from '../components/Tweets/AllTweets';

// React Icons 
import { HiCheckBadge } from 'react-icons/hi2';

export default function Home() {
  return (
    <>
      <Sidebar homeIcon="src/Icons/Home-Fill.svg" profileIcon="src/Icons/Profile.svg" />
      <main className="timeline">
        <Header />
        <section className='tweet-editor'>
          <Avatar />
          <TweetEditorForm />
        </section>
        <section className='tweets'>
          <AllTweets icon={<HiCheckBadge />} />
        </section>
      </main>
      <Trends />
    </>
  );
}


