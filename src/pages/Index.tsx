
import React from 'react';
import Header from '../components/Header';
import ScrollingBanner from '../components/ScrollingBanner';
import HeroSection from '../components/HeroSection';
import ProductTabs from '../components/ProductTabs';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <ScrollingBanner />
      <HeroSection />
      <div className="flex-1">
        <ProductTabs />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
