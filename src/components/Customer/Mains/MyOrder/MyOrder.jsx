import React from 'react';
import { useEffect, useState } from 'react';
import './style.scss';
import Headers from '../../Header/Headers';
import BannerProducts from '../Products/BannerProducts/BannerProducts';
import Instagram from '../Products/Instagram/Instagram';
import Footer from '../../Footer/Footer';
import ContentMyOrders from './ContentMyOrder';
import { connect, useDispatch } from "react-redux";
import {getOrder} from '../../../../redux/actions/orderAction'

const MyOrders = ({ auth, orders }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const { accessToken } = auth || {};
    if (accessToken) {
      dispatch(getOrder());
    }
    }, [])
    console.log(`orders`, orders)
    return (
      <>
      <Headers/>
      <BannerProducts/>
      <ContentMyOrders orders={orders}/>
      <Instagram/>
      <Footer/>
      </>
    );
};

function mapStateToProps(state) {
  const {
    auth: { data: authData },
    order: { data: orderData }
  } = state;
  return { auth: authData, orders: orderData };
}

export default connect(mapStateToProps)(MyOrders);
