
import React from 'react';
import Header from '../components/Header';
import ScrollingBanner from '../components/ScrollingBanner';
import HeroSection from '../components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollingBanner />
      <HeroSection />
    </div>
  );
};

export default Index;
