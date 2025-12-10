import React from 'react';
import Hero from '../components/Hero';
import SuccessStats from '../components/SuccessStats';
import ExecutiveSummary from '../components/ExecutiveSummary';
import News from '../components/News';

const Home = () => {
  return (
    <>
      <Hero />
      <SuccessStats />
      <ExecutiveSummary />
      <News />
    </>
  );
};

export default Home;
