import React from 'react';
import './style.scss';
import Headers from '../../Header/Headers';
import BannerProducts from '../Products/BannerProducts/BannerProducts';
import Instagram from '../Products/Instagram/Instagram';
import Footer from '../../Footer/Footer';
import ContentMyOrders from './ContentMyOrder';

const MyOrders = () => {
    return (
      <>
      <Headers/>
      <BannerProducts/>
      <ContentMyOrders/>
      <Instagram/>
      <Footer/>
      </>
    );
};

export default MyOrders;