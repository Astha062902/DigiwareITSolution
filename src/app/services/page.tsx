import React from 'react';
 import Header from '@/components/header';
import ServicesBanner from './parts/ServicesBanner';
import SoftwareDevelopment from './parts/SoftwareDev';
import WebsiteDevelopment from './parts/WebDev';
import DigitalMarketing from './parts/DigiMarket';
import GraphicsDesign from './parts/GraphicsDesign';
import UX_UI from './parts/UX-UI';
import SMS_IVR from './parts/SMS';
import Callback from '../homepage/Callback';
import Footer from '@/components/footer';

const Services: React.FC = () => {
    return (
      <div className="services-container">
        <Header />
        <ServicesBanner />
        <SoftwareDevelopment/>
        <WebsiteDevelopment/>
        <DigitalMarketing/>
        <UX_UI/>
        <GraphicsDesign/>
        <SMS_IVR/>
        <Callback/>
        <Footer/>

        </div>
  );
};

export default Services;