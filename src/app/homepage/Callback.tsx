import React from 'react';
import './Callback.css';
import Image from 'next/image';

const Callback: React.FC = () => {
  return (
    
      
      <div className="callback">
        <div className="callback-image">
          <Image src="/assets/icon-call.png" width={168} height={182} alt="icon-call" />
        </div>
      
        <div className="callback-content">
               
            <h2>Connect to our Business Expert</h2>
          <p>
            Partnering with Digiware entails working with an amicable group of Digiware 
            <br/>specialists. Get in touch with us.
          </p>
          <button className="request-button">Request a Callback</button>
        </div>
        
      </div>
  
    );
};

export default Callback;
