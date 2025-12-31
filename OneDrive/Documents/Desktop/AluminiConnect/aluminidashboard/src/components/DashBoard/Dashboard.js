import React from 'react';
import Slidebar from '../Slidebar/Slidebar';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import Stats from '../Stats/Stats';
import SuccessStories from '../SuccessStories/SuccessStories';
import Donationcard from '../Donationcard/Donationcard';
import JobPost from '../JobPost/JobPost';
import './Dashboard.css'



function Dashboard() {
  return (
    <div className="dashboard-container">
      <Slidebar />
      <div className="dashboard-main">
        <Header />
        <Welcome />
        <Stats />
        <SuccessStories />
        <Donationcard />
        <JobPost />
      </div>
    </div>
  );
}

export default Dashboard;
