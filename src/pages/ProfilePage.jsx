import React from 'react';
import Header from '../components/Header/Header';
import Avatar from '../components/Tweet-editor/Avatar';
import TweetEditorForm from '../components/Tweet-editor/TweetEditorForm';
import Trends from '../components/Trends/Trends';

import Tweets from '../components/Tweets/Tweets';
import Sidebar from '../components/Sidebar/Sidebar';
import Profile from '../components/Profile/Profile';

export default function ProfilePage() {
  return (
    <>
    <Sidebar homeIcon="src/Icons/Home.svg" profileIcon="src/Icons/Profile-fill.svg" />
    <main className="timeline">
      <section >
        <Profile />
        <Tweets />
      </section>
    </main>
    <Trends />
    </>
  );
}
