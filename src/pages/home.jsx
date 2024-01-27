import React from 'react';

//left sidebar
import Sidebar from '../components/Sidebar/Sidebar';

// tweet components
import Header from '../components/Header/Header';
import Avatar from '../components/Tweet-editor/Avatar';
import TweetEditorForm from '../components/Tweet-editor/TweetEditorForm';
import AllTweets from '../components/Tweets/AllTweets';
import data from '../components/Data/data';

//the components of the right sidebar
import Search from '../components/Trends/Search';
import TrendsCard from '../components/Trends/TrendsCard';
import FollowCard from '../components/Trends/FollowCard';
import PolicyTerms from '../components/Trends/PolicyTerms';

// React Icons 
import { HiCheckBadge } from 'react-icons/hi2';
import { useState } from 'react';

export default function Home() {
  // état local pour les tweets de l'utilisateur connecté
  const [tweets, setTweets] = useState(data.Hermacle.tweets);

  // Fonction de mise à jour des tweets
  const updateTweets = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };
  return (
    <>
      <Sidebar homeIcon="src/Icons/Home-Fill.svg" profileIcon="src/Icons/Profile.svg" />
      <main className="timeline">
        <Header />
        <section className='tweet-editor'>
          <Avatar />
          <TweetEditorForm updateTweets={updateTweets} />
        </section>
        <section className='tweets'>
          <AllTweets tweets={tweets} icon={<HiCheckBadge />} />
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


