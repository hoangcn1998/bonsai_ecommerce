import React from 'react';
import { Route } from "react-router-dom";
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';

const ContentPageForm = () => {
  return (
    <>
      <Route exact path="/" component={FormLogin}></Route>
      <Route path="/Register" component={FormRegister}></Route>
    </>
  );
};

export default ContentPageForm;
