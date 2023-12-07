import React from 'react';
import Header from '../components/Header/Header';
import Avatar from '../components/Tweet-editor/Avatar';
import TweetEditorForm from '../components/Tweet-editor/TweetEditorForm';
import Trends from '../components/Trends/Trends';

import Tweets from '../components/Tweets/Tweets';
import Sidebar from '../components/Sidebar/Sidebar';
 


export default function Home() {
  return (
    <>
    <Sidebar />
    <main className="timeline">
      <Header />
      <section className='tweet-editor'>
        <Avatar />
        <TweetEditorForm />
      </section>
      <section className='tweets'>
        <Tweets />
         
      </section>
    </main>
    <Trends />
    </>
  );
}


 
