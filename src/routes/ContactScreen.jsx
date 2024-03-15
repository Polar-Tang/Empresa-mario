import React from 'react';
import './styles.css';
import WhatsappButton from './WhatsappButton';
import Footer from './Footer2';
import { Contact } from './Contact';

const ContactScreen = () => {
  return (
    <div>
      <Contact></Contact>
      <WhatsappButton></WhatsappButton>
      <Footer></Footer>
    </div>
  );
};

export default ContactScreen;



  