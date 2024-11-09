"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import './header.css'; // Import the SCSS file

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link href="/">
            <Image src="/assets/logo.png" alt="Company Logo" width={175} height={60} />
          </Link>
        </div>
        <div className="header-right">
          <nav className="nav">
            <Link href="/" className="nav-link"><div className="home-icon"><Image src="/assets/home.png" width={20} height={20} alt="arrow"/></div>HOME</Link>
            <Link href="/about" className="nav-link">ABOUT</Link>
            <div className="nav-dropdown">
              <Link href="/services" className="nav-link">SERVICES<div className="dropdown-arrow"><Image src="/assets/dropdown-arrow.png" width={8} height={8} alt="arrow"/></div></Link>
              <div className="dropdown-content">
                <div className="nav-dropdown">
                  <Link href="/services/software-dev" className="dropdown-link">SOFTWARE DEVELOPMENT</Link>
                  <div className="dropdown-content">
                    <Link href="/services/software-dev#app-dev" className="dropdown-link">APPLICATION DEVELOPMENT</Link>
                    <Link href="/services/software-dev#ai-ml" className="dropdown-link">AI & ML - PYTHON</Link>
                    <Link href="/services/software-dev#tensorflow" className="dropdown-link">TENSORFLOW</Link>
                    <Link href="/services/software-dev#mean-mern" className="dropdown-link">MEAN/MERN STACK DEVELOPMENT</Link>
                    <Link href="/services/software-dev#big-data" className="dropdown-link">BIG DATA SERVICES</Link>
                    <Link href="/services/software-dev#mixed-reality" className="dropdown-link">MIXED REALITY DEVELOPMENT</Link>
                  </div>
                </div>
                <div className="nav-dropdown">
                  <Link href="/services/web-dev" className="dropdown-link">WEB DEVELOPMENT</Link>
                  <div className="dropdown-content">
                    <Link href="/services/web-dev/frontend" className="dropdown-link">FRONTEND DEVELOPMENT</Link>
                    <Link href="/services/web-dev/backend" className="dropdown-link">BACKEND DEVELOPMENT</Link>
                  </div>
                </div>
                <div className="nav-dropdown">
                  <Link href="/services/digital-marketing" className="dropdown-link">DIGITAL MARKETING</Link>
                  <div className="dropdown-content">
                    <Link href="/services/digital-marketing/seo" className="dropdown-link">SEO</Link>
                    <Link href="/services/digital-marketing/ppc" className="dropdown-link">PPC</Link>
                  </div>
                </div>
                <div className="nav-dropdown">
                  <Link href="/services/ux-ui" className="dropdown-link">UX/UI DESIGN</Link>
                  <div className="dropdown-content">
                    <Link href="/services/ux-ui/prototyping" className="dropdown-link">PROTOTYPING</Link>
                    <Link href="/services/ux-ui/usability-testing" className="dropdown-link">USABILITY TESTING</Link>
                  </div>
                </div>
                <div className="nav-dropdown">
                  <Link href="/services/graphics-design" className="dropdown-link">GRAPHICS DESIGN & BRANDING</Link>
                  <div className="dropdown-content">
                    <Link href="/services/graphics-design/logo" className="dropdown-link">LOGO DESIGN</Link>
                    <Link href="/services/graphics-design/branding" className="dropdown-link">BRANDING</Link>
                  </div>
                </div>
                <div className="nav-dropdown">
                  <Link href="/services/sms-ivr" className="dropdown-link">SMS & IVR SERVICES</Link>
                  <div className="dropdown-content">
                    <Link href="/services/sms-ivr/sms-marketing" className="dropdown-link">SMS MARKETING</Link>
                    <Link href="/services/sms-ivr/ivr-solutions" className="dropdown-link">IVR SOLUTIONS</Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/blog" className="nav-link">BLOG</Link>
            <Link href="/contact-us" className="nav-link">CONTACT US</Link>
          </nav>
          <div className="consult-button-container">
            <button className="consult-button">CONSULT NOW</button>
          </div>
          <button className="menu-button" onClick={toggleSidebar}>
            <Image src="/assets/menu.png" width={40} height={40} alt="menu"/>
          </button>
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleSidebar}>
          &times;
        </button>
        <nav className="sidebar-nav">
          <div className="home-icon"><Image src="/assets/home.png" width={20} height={20} alt="arrow"/></div>
          <Link href="/" className="sidebar-link">HOME</Link>
          <Link href="/about" className="sidebar-link">ABOUT</Link>
          <Link href="/services" className="sidebar-link">SERVICES</Link>
          <Link href="/blog" className="sidebar-link">BLOG</Link>
          <Link href="/contact" className="sidebar-link">CONTACT US</Link>
        </nav>
      </div>
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
    </header>
  );
};

export default Header;







