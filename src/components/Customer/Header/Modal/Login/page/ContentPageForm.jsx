import React from "react";
import { Route } from "react-router-dom";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

const ContentPageForm = () => {
  return (
    <>
      <Route exact path="/HomePage/Login" component={FormLogin}></Route>
      <Route path="/HomePage/Register" component={FormRegister}></Route>
    </>
  );
};

export default ContentPageForm;
