import React from 'react';
import Header from '../components/Header/Header';
import Avatar from '../components/Tweet-editor/avatar';
import TweetEditorForm from '../components/Tweet-editor/TweetEditorForm';

export default function Home() {
  return (
    <main className="timeline">
      <Header />
      <section className='tweet-editor'>
        <Avatar />
        <TweetEditorForm />
      </section>
    </main>
  );
}
