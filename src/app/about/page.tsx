import React from 'react';
 import Header from '@/components/header';
import AboutBanner from './parts/AboutBanner';
import WhoWeAre from './parts/WhoWeAre';
import OurCompetence from './parts/OurCompetence';
import OurVision from './parts/OurVision';
import Callback from '../homepage/Callback';
import Footer from '@/components/footer'

const About: React.FC = () => {
    return (
      <div className="about-container">
        <Header />
        <AboutBanner />
        <WhoWeAre/>
        <OurCompetence/>
        <OurVision/>
        <Callback /> 
       <Footer/>
    </div>
  );
};

export default About;
