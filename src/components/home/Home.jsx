import React from 'react';
import Hero from './hero/Hero';
import HAbout from './HAbout';
import AboutCard from '../about/AboutCard';
import Test from './testimonal/Test';
import Hblog from './Hblog';
import Hprice from './Hprice';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test/>
      <Hblog/>
      <Hprice/>
    </div>
  )
};

export default Home;
