import React from 'react';
import Header from '../components/Header/Header';
import Avatar from '../components/Tweet-editor/avatar';
import TweetEditorForm from '../components/Tweet-editor/TweetEditorForm';
import TweetOne from '../components/Tweets/TweetOne';
import TweetTwo from '../components/Tweets/TweetTwo';
import TweetThree from '../components/Tweets/TweetThree';
import TweetFor from '../components/Tweets/TweetFor';

export default function Home() {
  return (
    <main className="timeline">
      <Header />
      <section className='tweet-editor'>
        <Avatar />
        <TweetEditorForm />
      </section>
      <section className='tweets'>
        <TweetOne />
        <TweetTwo />
        <TweetThree />
        <TweetFor />
      </section>
    </main>
  );
}
