import React from 'react';
import { HeroSection, ServicesPreview, WhyChooseUs, HighlightsSection, CTASection, WhoWeServe } from '../components/home/HomePage';
import FooterStats from '../components/FooterStats';

function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <WhoWeServe />
      <HighlightsSection />
      <CTASection />
      <FooterStats />
    </div>
  );
}

export default Home;
