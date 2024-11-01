import React from 'react';
 import Header from '@/components/header';

import Footer from '@/components/footer'
import ContactBanner from './parts/ContactBanner';
import ContactDetails from './parts/ContactDetails';

import SpecialPage from './parts/ContactFormPage';


const Contact_Us: React.FC = () => {
    return (
      <div className="about-container">
        <Header />
        <ContactBanner/>
        <ContactDetails/>
        
        <SpecialPage/>
       
       <Footer/>
    </div>
  );
};

export default Contact_Us;