import React from 'react';
import { AboutHero, WhoWeAre, MissionVision, WeAspireToServe, OurApproach, AboutCTA } from '../components/about/About';

function About() {
  return (
    <div className="w-full bg-white">
      <div className="pt-16">
        <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <WeAspireToServe />
      <OurApproach />
      <AboutCTA />
      </div>
    </div>
  );
}

export default About;

