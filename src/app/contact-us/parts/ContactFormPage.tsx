"use client";

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'flag-icon-css/css/flag-icons.min.css';
import styles from './ContactFormPage.module.css';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [phone, setPhone] = useState('');

  return (
    <div className={`${styles.customFormContainer} ${className}`}>
      <form className={styles.customContactForm}>
        <h1 className={styles.customFormHeading}>We Love to Hear From You</h1>
        <p className={styles.customFormContent}>Please submit contact form and we will be happy to assist you.</p>
        <div className={styles.customVborder}></div>
        
        <div className={styles.customFormGroupRow}>
          <div className={styles.customFormGroup}>
            <input type="text" id="name" name="name" placeholder="Name" required className={styles.customInput} />
          </div>
          <div className={styles.customFormGroup}>
            <PhoneInput
              country={'us'}
              value={phone}
              onChange={setPhone}
              containerClass={styles.customPhoneInputContainer}
              inputClass={styles.customPhoneInput}
              buttonClass={styles.customPhoneInputButton}
              dropdownClass="phone-input-dropdown"
            />
          </div>
        </div>

        <div className={styles.customFormGroupRow}>
          <div className={styles.customFormGroup}>
            <input type="email" id="email" name="email" placeholder="E-mail" required className={styles.customInput} />
          </div>
          <div className={styles.customFormGroup}>
            <select id="service" name="service" required className={styles.customSelect}>
              <option value="" disabled selected>Select Required Service</option>
              <option value="service1">Software Development</option>
              <option value="service2">Web Development</option>
              <option value="service3">Digital Marketing</option>
              <option value="service4">UX Design</option>
              <option value="service5">Graphic Design & Branding</option>
              <option value="service6">SMS & IVR Services</option>
            </select>
          </div>
        </div>

        <div className={styles.customFormGroupFull}>
          <textarea id="message" name="message" rows={4} placeholder="How can we help you?" required className={styles.customTextarea}></textarea>
        </div>
        
        <div className={styles.customFormGroup}>
          <button type="submit" className={styles.customSendButton}>SEND MESSAGE</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
