import React from 'react';
import Hero from './hero/Hero';
import HAbout from './HAbout';
import AboutCard from '../about/AboutCard';
import Test from './testimonal/Test';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test/>
    </div>
  )
};

export default Home;
