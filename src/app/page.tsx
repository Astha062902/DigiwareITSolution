

import React from 'react';
 import Header from '@/components/header';
import HomeBanner from './homepage/HomeBanner';
import InfoSection from './homepage/InfoSection';
import CardsSection from './homepage/CardsSection';
import AboutSection from './homepage/AboutSection';
import PartnersSection from './homepage/PartnersSection';
import ServicesInfoSection from './homepage/ServicesInfoSection';
import WhyUs from './homepage/WhyUs';
import LatestNews from './homepage/LatestNews';
import OurClients from './homepage/OurClients';
import Callback from './homepage/Callback';
import Footer from '@/components/footer'
import './homePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <Header />
      
        <HomeBanner />
          
     <InfoSection />
     <CardsSection />
      <AboutSection />
       <PartnersSection />
      <ServicesInfoSection />
      <WhyUs/>
        <LatestNews/>
       <OurClients/>
       <Callback /> 
       <Footer/>  
       
      
       
       
    </div>
  );
};

export default HomePage;
