import React from 'react';
import Card from '@/components/Card';
import './ServicesInfoSection.css';

const ServicesInfoSection: React.FC = () => {
  return (
    <div className="services-info-section">
      <h2>Discover Our Services</h2>
      <p>
        With our exotic computing technologies, we have the skills and experience to lift and best enterprises. We’ll be there for you every step of the way, from concept to launch. For your application development process, Digiware IT Solutions will design a progressive workflow architecture.
      </p>
      <div className="services-cards-section">
        <Card
          src="/assets/softdev-1.jpg"
          height={250}
          width={300}
          alt="Software Development"
          title="Software Development"
          description="The creation of dependable and scalable software solutions for any operating system or device. We combine extensive industry knowledge with cutting-edge technology to create personalized solutions and products that exactly meet the demands and behaviours."
          buttonLabel="READ MORE"
        />
        <Card
          src="/assets/web-deb-1-360x240.jpg"
          height={250}
          width={300}
          alt="Web Development"
          title="Web Development"
          description="We have a team of specialists trained, certified, and with extensive expertise in a number of website platforms. Our professional web development workforce is well-versed in keeping up with the newest trends while still adhering to the necessary standards."
          buttonLabel="READ MORE"
        />
        <Card
          src="/assets/digital-mrkt.jpg"
          height={250}
          width={300}
          alt="Digital Marketing"
          title="Digital Marketing"
          description="We’re here to bring highly targeted traffic to your business utilizing a variety of digital marketing methods aimed at expanding your company’s reach and exposure on social media. In its most basic form, it is internet-based marketing."
          buttonLabel="READ MORE"
        />
        <Card
          src="/assets/UI-UX.jpg"
          height={250}
          width={300}
          alt="UI / UX Design"
          title="UI / UX Design"
          description="User Experience(UX) is at the heart of the User Interface(UI). Our UX designers have a wealth of knowledge in the key areas of user experience, allowing them to cooperate on the finer points of usability and functionality."
          buttonLabel="READ MORE"
        />
        <Card
          src="/assets/Graphics-design.jpg"
          height={250}
          width={300}
          alt="Graphics Design & Branding"
          title="Graphics Design & Branding"
          description="Designing a brand identity for your company that will communicate your intention, objectives, and all you want to do for your audience – all in one graphic design – linking your company with your consumers."
          buttonLabel="READ MORE"
        />
        <Card
          src="/assets/restaurant.webp"
          height={250}
          width={300}
          alt="Restaurant Digital Marketing"
          title="Restaurant Digital Marketing"
          description="Restaurant Digital Marketing services encompass a range of online strategies tailored to promote eateries. Services include social media management, search engine optimization, online advertising, email marketing, etc."
          buttonLabel="READ MORE"
        />
      </div>
    </div>
  );
};

export default ServicesInfoSection;
