import React from 'react';
import { useState } from 'react';
import Header from './Header/Headers';
import Mains from './Mains/Mains'; 
import Footer from './Footer/Footer';

const Customer = () => {

    return (
      <div className="customer">
        <Header/>
        <Mains></Mains>
        <Footer></Footer>
      </div>
    );
};

export default Customer;
